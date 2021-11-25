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
    width: '1920px',
    height: '1080px',
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    preferCSSPageSize: true
  });

  browser.close();
})();
