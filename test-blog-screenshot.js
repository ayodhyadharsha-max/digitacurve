const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  page.on('requestfailed', req => console.log('REQUEST FAILED:', req.url(), req.failure().errorText));

  await page.setViewportSize({ width: 1280, height: 1600 });
  await page.goto('http://localhost:3000/blog/how-much-to-charge-for-shipping');
  await page.waitForTimeout(10000);
  
  const html = await page.content();
  console.log("HTML length:", html.length);
  
  await page.screenshot({ path: '/Users/rishabhjaiswal/.gemini/antigravity/brain/1f3dcb44-8c22-49f7-aa83-32d6098efee0/media__blog_detail_test.png', fullPage: true });
  await browser.close();
  console.log("Blog details screenshot saved!");
})();
