const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', { waitUntil: 'domcontentloaded', timeout: 30000 });
  console.log('title:', await page.title());
  for (const sel of [
    "input[placeholder='Username']",
    "input[name='username']",
    "input[autocomplete='off']",
    "input[type='text']",
    "//input[@placeholder='Username']"
  ]) {
    try {
      console.log(sel, await page.locator(sel).count());
    } catch (e) {
      console.log(sel, 'ERR', e.message);
    }
  }
  console.log('BODY START');
  console.log((await page.locator('body').innerHTML()).slice(0, 2000));
  console.log('BODY END');
  await browser.close();
})();
