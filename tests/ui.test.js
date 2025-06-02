const { Builder, By, until } = require('selenium-webdriver');

test('Google has correct title', async () => {
  const driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    expect(title).toMatch(/Google/);
  } finally {
    await driver.quit();
  }
}, 20000); // timeout 20 sekunder
