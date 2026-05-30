const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000);
  
  const debug = await page.evaluate(() => {
    const el = document.querySelector('.project-one');
    if (!el) return "Not found";
    
    // Dump all CSS rules matching this element
    const styles = window.getComputedStyle(el);
    return {
      classes: el.className,
      tagName: el.tagName,
      height: styles.height,
      minHeight: styles.minHeight,
      display: styles.display,
      position: styles.position,
      boxSizing: styles.boxSizing,
      parentClasses: el.parentElement.className,
      parentHeight: window.getComputedStyle(el.parentElement).height
    };
  });
  
  console.log(JSON.stringify(debug, null, 2));
  await browser.close();
})();
