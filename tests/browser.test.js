const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

jest.setTimeout(20000); // Öka timeout till 20 sekunder

test('öppnar Google och söker på OpenAI', async () => {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    await driver.get('https://www.google.com');

    // Hantera ev. cookie-popup
    try {
      const rejectButton = await driver.wait(
        until.elementLocated(By.xpath('//button/div[normalize-space()="Avvisa alla"]')),
        3000
      );
      await rejectButton.click();
    } catch (err) {
      console.log('Cookie-popup hittades inte.');
    }

    const searchBox = await driver.wait(until.elementLocated(By.name('q')), 10000);
    await driver.wait(until.elementIsVisible(searchBox), 5000);
    await searchBox.sendKeys('OpenAI', '\n');

    await driver.sleep(5000); // Ge sidan tid att ladda
    const title = await driver.getTitle();
    console.log('SIDTITEL:', title);

    expect(title).toMatch(/OpenAI/i);
  } finally {
    await driver.quit();
  }
});
