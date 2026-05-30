const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
  page.on('requestfailed', req => console.log('REQUEST FAILED:', req.url(), req.failure().errorText));

  console.log("Navigating to page...");
  const response = await page.goto('http://localhost:3000/blog/how-much-to-charge-for-shipping');
  console.log("Response status:", response.status());

  await page.waitForTimeout(10000); // Wait for 10 seconds for hydration & API fetch
  
  const bodyHTMLSnippet = await page.evaluate(() => document.body.innerHTML.slice(0, 1000));
  console.log("BODY HTML Snippet:", bodyHTMLSnippet);

  const title = await page.evaluate(() => document.querySelector('h1')?.innerText);
  console.log("H1 Title:", title);

  const errorEl = await page.evaluate(() => document.querySelector('h2')?.innerText);
  console.log("H2 Heading (e.g. Error):", errorEl);

  await browser.close();
})();
