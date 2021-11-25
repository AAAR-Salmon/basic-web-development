const Puppeteer = require('puppeteer');

(async () => {
  const browser = await Puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:8888/slides/what-is-html/');

  await page.pdf({
    path: 'what-is-html.pdf',
    width: '338.7mm',
    height: '190.5mm'
  });

  browser.close();
})();
