const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(5000);
  
  const data = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.recent-blogs .card'));
    return cards.map((card, idx) => {
      const img = card.querySelector('img');
      const title = card.querySelector('.card-title');
      const text = card.querySelector('.card-text');
      
      const imgRect = img ? img.getBoundingClientRect() : null;
      const titleRect = title ? title.getBoundingClientRect() : null;
      const textRect = text ? text.getBoundingClientRect() : null;
      
      return {
        cardIndex: idx,
        imgVisible: imgRect ? imgRect.height > 0 : false,
        imgSrc: img ? img.src : null,
        title: title ? title.innerText : null,
        titleVisible: titleRect ? titleRect.height > 0 : false,
        text: text ? text.innerText : null,
        textVisible: textRect ? textRect.height > 0 : false,
        textHeight: textRect ? textRect.height : 0
      };
    });
  });
  
  console.log(JSON.stringify(data, null, 2));
  await browser.close();
})();
