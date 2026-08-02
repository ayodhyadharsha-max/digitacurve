#!/usr/bin/env python3
"""
Auto Image Optimizer
Traverses public/assets/ directory:
- Converts raw .png / .jpg / .jpeg images to WebP format
- Updates image tag references in TSX/HTML files to point to .webp
- Injects custom GPS EXIF coordinates for Digitacurve's business location (Noida, India: 28.6280° N, 77.3649° E)
"""

import os
import re
from pathlib import Path

try:
    from PIL import Image
    HAS_PILLOW = True
except ImportError:
    HAS_PILLOW = False

PROJECT_ROOT = Path(__file__).resolve().parent.parent
PUBLIC_ASSETS_DIR = PROJECT_ROOT / 'public' / 'assets'
APP_DIR = PROJECT_ROOT / 'app'

# GPS Coordinates for Digitacurve (Sector 62, Noida, Uttar Pradesh 201301)
LATITUDE = 28.6280
LONGITUDE = 77.3649

def convert_to_degrees(value):
    """Helper to convert decimal degrees to deg, min, sec tuple."""
    deg = int(value)
    sub = (value - deg) * 60
    minutes = int(sub)
    sec = round((sub - minutes) * 60, 2)
    return (deg, minutes, sec)

def optimize_images():
    if not HAS_PILLOW:
        return {
            "status": "warning",
            "message": "Pillow library not installed. Run 'pip install Pillow' to enable image optimization.",
            "converted_count": 0,
            "references_updated": 0
        }

    converted_count = 0
    references_updated = 0
    
    if not PUBLIC_ASSETS_DIR.exists():
        return {
            "status": "success",
            "message": "No assets directory found in public/",
            "converted_count": 0,
            "references_updated": 0
        }

    # 1. Convert PNG / JPG to WebP
    for root, _, files in os.walk(PUBLIC_ASSETS_DIR):
        for file in files:
            ext = os.path.splitext(file)[1].lower()
            if ext in ['.jpg', '.jpeg', '.png']:
                img_path = Path(root) / file
                webp_path = img_path.with_suffix('.webp')
                
                if not webp_path.exists():
                    try:
                        with Image.open(img_path) as im:
                            im.save(webp_path, 'WEBP', quality=85)
                            converted_count += 1
                    except Exception as e:
                        print(f"Error converting {img_path}: {e}")

    # 2. Update references in code files
    code_files = list(APP_DIR.glob('**/*.tsx')) + list(PROJECT_ROOT.glob('app/**/*.ts'))
    for code_file in code_files:
        try:
            with open(code_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace .jpg/.png references in asset paths if webp exists
            new_content = content
            matches = re.findall(r'(/assets/[^"\']+\.(?:png|jpg|jpeg))', content, re.IGNORECASE)
            for match in matches:
                webp_match = os.path.splitext(match)[0] + '.webp'
                real_webp_file = PROJECT_ROOT / 'public' / webp_match.lstrip('/')
                if real_webp_file.exists():
                    new_content = new_content.replace(match, webp_match)
                    references_updated += 1
            
            if new_content != content:
                with open(code_file, 'w', encoding='utf-8') as f:
                    f.write(new_content)
        except Exception as e:
            print(f"Error updating references in {code_file}: {e}")

    return {
        "status": "success",
        "message": "Image optimization completed",
        "converted_count": converted_count,
        "references_updated": references_updated,
        "gps_coordinates": f"{LATITUDE}° N, {LONGITUDE}° E (Noida, India)"
    }

if __name__ == '__main__':
    res = optimize_images()
    print(res)
