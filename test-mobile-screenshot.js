const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to mobile (e.g. iPhone 12: 390x844)
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000');
  
  // Scroll down in steps to trigger Intersection Observers
  const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  const steps = 15;
  for (let i = 1; i <= steps; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), (scrollHeight / steps) * i);
    await page.waitForTimeout(200);
  }
  
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  await page.screenshot({ path: '/Users/rishabhjaiswal/.gemini/antigravity/brain/1f3dcb44-8c22-49f7-aa83-32d6098efee0/media__mobile_test.png', fullPage: true });
  await browser.close();
  console.log("Mobile screenshot saved!");
})();
