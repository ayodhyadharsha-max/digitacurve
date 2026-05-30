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
    const rulesMatched = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText && el.matches(rule.selectorText)) {
            rulesMatched.push({
              selector: rule.selectorText,
              css: rule.cssText
            });
          }
        }
      } catch (e) {}
    }
    return rulesMatched;
  });
  console.log(JSON.stringify(rules, null, 2));
  await browser.close();
})();
