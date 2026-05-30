const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000);
  
  const rules = await page.evaluate(() => {
    const el = document.querySelector('.project-one');
    if (!el) return "No element";
    
    const matchedRules = [];
    
    function parseRule(rule) {
      if (rule.type === 1) { // CSSStyleRule
        if (el.matches(rule.selectorText)) {
          matchedRules.push({
            selector: rule.selectorText,
            css: rule.cssText
          });
        }
      } else if (rule.type === 4) { // CSSMediaRule
        // Check if media query is currently matching
        const isMatch = window.matchMedia(rule.media.mediaText).matches;
        if (rule.cssRules) {
          for (const subRule of rule.cssRules) {
            if (subRule.selectorText && el.matches(subRule.selectorText)) {
              matchedRules.push({
                mediaText: rule.media.mediaText,
                isMediaMatch: isMatch,
                selector: subRule.selectorText,
                css: subRule.cssText
              });
            }
          }
        }
      }
    }

    for (const sheet of document.styleSheets) {
      try {
        const rules = sheet.cssRules || sheet.rules;
        for (const rule of rules) {
          parseRule(rule);
        }
      } catch (e) {
        // Skip cross-origin stylesheets that throw error
      }
    }
    
    return matchedRules;
  });
  
  console.log(JSON.stringify(rules, null, 2));
  await browser.close();
})();
