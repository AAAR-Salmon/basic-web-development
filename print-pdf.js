const puppeteer = require('puppeteer');
const commandLineArgs = require('command-line-args');

const optionDefinitions = [
  { name: 'path', defaultOption: true },
  { name: 'baseUrl', alias: 'u', defaultValue: 'http://localhost:8888/' },
  { name: 'output', alias: 'o' }
];

const options = commandLineArgs(optionDefinitions);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const targetUrl = new URL(options.path, options.baseUrl);

  await page.goto(targetUrl.toString());

  await page.pdf({
    path: options.output ?? 'page.pdf',
    width: '338.7mm',
    height: '190.5mm'
  });

  browser.close();
})();
