const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport to mobile
  await page.setViewportSize({ width: 390, height: 844 });
  
  console.log("Navigating to homepage on mobile...");
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000); // Wait for animations
  
  const data = await page.evaluate(() => {
    const checkCard = (selector) => {
      const card = document.querySelector(selector);
      if (!card) return { found: false };
      
      const rect = card.getBoundingClientRect();
      const details = card.querySelector('[class*="details"]');
      const detailsRect = details ? details.getBoundingClientRect() : null;
      
      const title = card.querySelector('h3')?.innerText;
      const desc = card.querySelector('p')?.innerText;
      
      const detailsVisible = detailsRect ? (detailsRect.height > 0 && detailsRect.width > 0) : false;
      const computedStyle = details ? window.getComputedStyle(details) : null;
      
      return {
        found: true,
        height: rect.height,
        width: rect.width,
        title,
        desc,
        detailsVisible,
        detailsOpacity: computedStyle?.opacity,
        detailsDisplay: computedStyle?.display,
        detailsZIndex: computedStyle?.zIndex
      };
    };

    return {
      projectOne: checkCard('.project-one'),
      projectTwo: checkCard('.project-two'),
      projectThree: checkCard('.project-three')
    };
  });

  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
