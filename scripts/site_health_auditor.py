#!/usr/bin/env python3
"""
Site Health Auditor
Crawls project TSX/HTML files in Next.js app/ directory and checks for:
- Missing title tags / short titles (< 10 chars)
- Missing meta descriptions
- Multiple or missing <h1> tags
- Missing alt tags on images
- JSON-LD schema syntax errors
- Broken internal links (404s)
"""

import os
import re
import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parent.parent
APP_DIR = PROJECT_ROOT / 'app'
PUBLIC_DIR = PROJECT_ROOT / 'public'

def get_registered_routes():
    """Extract all valid routes in Next.js app router."""
    routes = set(['/'])
    if not APP_DIR.exists():
        return routes
    
    for path in APP_DIR.glob('**/page.tsx'):
        rel = path.relative_to(APP_DIR).parent
        route_str = '/' + str(rel).replace('\\', '/')
        if route_str == '/.':
            route_str = '/'
        # handle dynamic routes like [slug]
        routes.add(route_str)
        # also add base dynamic path pattern
        clean_route = re.sub(r'/\[[^\]]+\]', '', route_str)
        if clean_route:
            routes.add(clean_route)
            
    # Add common static assets & API routes
    routes.update(['/favicon.ico', '/robots.txt', '/sitemap.xml', '/icon.png', '/llms.txt'])
    return routes

def audit_site():
    valid_routes = get_registered_routes()
    issues = {
        "missing_titles": [],
        "short_titles": [],
        "missing_meta_descriptions": [],
        "h1_issues": [],
        "missing_image_alts": [],
        "jsonld_errors": [],
        "broken_internal_links": []
    }
    
    files_checked = 0
    target_files = list(APP_DIR.glob('**/*.tsx')) + list(PUBLIC_DIR.glob('**/*.html'))
    
    for file_path in target_files:
        files_checked += 1
        rel_path = str(file_path.relative_to(PROJECT_ROOT))
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            continue

        # Skip redirect stub pages
        is_redirect_stub = "redirect(" in content and len(content.splitlines()) < 25

        # Check sibling layout if page is a client component
        sibling_layout = file_path.parent / 'layout.tsx'
        layout_content = ""
        if sibling_layout.exists():
            try:
                with open(sibling_layout, 'r', encoding='utf-8') as lf:
                    layout_content = lf.read()
            except Exception:
                pass

        if not is_redirect_stub:
            # 1. Check Titles
            title_matches = re.findall(r"title:\s*['\"`]([^'\"`]+)['\"`]", content) or re.findall(r"<title>([^<]+)</title>", content)

            if not title_matches and 'page.tsx' in file_path.name:
                if layout_content:
                    layout_titles = re.findall(r"title:\s*['\"`]([^'\"`]+)['\"`]", layout_content)
                    if not layout_titles and 'generateMetadata' not in layout_content:
                        issues["missing_titles"].append({"file": rel_path, "issue": "No explicit title defined"})
                elif 'app/page.tsx' not in rel_path:
                    issues["missing_titles"].append({"file": rel_path, "issue": "No explicit title defined"})
            elif title_matches:
                title_text = title_matches[0]
                if len(title_text) < 10 and 'title:' in content and 'export const metadata' in content:
                    issues["short_titles"].append({"file": rel_path, "title": title_text, "length": len(title_text)})

            # 2. Check Meta Descriptions
            meta_desc = re.findall(r"description:\s*['\"`]([^'\"`]+)['\"`]", content) or re.findall(r'<meta\s+name=["\']description["\']\s+content=["\']([^"\']+)["\']', content)
            if not meta_desc and 'page.tsx' in file_path.name and 'layout.tsx' not in rel_path:
                if layout_content:
                    layout_desc = re.findall(r"description:\s*['\"`]([^'\"`]+)['\"`]", layout_content)
                    if not layout_desc and 'generateMetadata' not in layout_content:
                        issues["missing_meta_descriptions"].append({"file": rel_path, "issue": "Missing meta description"})
                else:
                    issues["missing_meta_descriptions"].append({"file": rel_path, "issue": "Missing meta description"})

            # 3. Check H1 Tags
            h1_tags = re.findall(r"<h1[^>]*>(.*?)</h1>", content, re.DOTALL)
            if 'page.tsx' in file_path.name:
                if len(h1_tags) == 0:
                    issues["h1_issues"].append({"file": rel_path, "issue": "Missing <h1> tag"})
                elif len(h1_tags) > 1:
                    issues["h1_issues"].append({"file": rel_path, "issue": f"Multiple <h1> tags ({len(h1_tags)} found)"})

        # 4. Check Image Alt Tags (allowing alt="" only when aria-hidden is specified for decorative icons)
        img_tags = re.findall(r"<(?:img|Image)\s+[^>]*>", content)
        for img in img_tags:
            if 'alt=' not in img:
                issues["missing_image_alts"].append({"file": rel_path, "tag": img[:60] + "..."})
            elif re.search(r'alt=["\']\s*["\']', img) and 'aria-hidden' not in img and 'role="presentation"' not in img:
                issues["missing_image_alts"].append({"file": rel_path, "tag": img[:60] + "..."})

        # 5. Check JSON-LD Schemas
        jsonld_script_blocks = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', content, re.DOTALL)
        for block in jsonld_script_blocks:
            try:
                json.loads(block.strip())
            except Exception as json_err:
                issues["jsonld_errors"].append({"file": rel_path, "error": str(json_err)})

        # 6. Check Internal Links
        internal_links = re.findall(r'href=["\'](/[^"\']*)["\']', content)
        for link in internal_links:
            clean_link = link.split('?')[0].split('#')[0]
            if clean_link == '' or clean_link == '/':
                continue
            is_valid = any(clean_link.startswith(r) or r.startswith(clean_link) for r in valid_routes)
            if not is_valid and not (PUBLIC_DIR / clean_link.lstrip('/')).exists():
                issues["broken_internal_links"].append({"file": rel_path, "link": link})

    return {
        "files_checked": files_checked,
        "valid_routes_count": len(valid_routes),
        "issues": issues
    }

if __name__ == '__main__':
    result = audit_site()
    print(json.dumps(result, indent=2))
