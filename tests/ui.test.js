const { Builder, By } = require('selenium-webdriver');
require('chromedriver');

let driver;
jest.setTimeout(10000);

beforeAll(async () => {
  driver = await new Builder().forBrowser('chrome').build();
  await driver.get('file://' + __dirname + '/../dist/index.html');
});

afterAll(async () => {
  await driver.quit();
});

test('Page should load with initial text n/a', async () => {
  let el = await driver.findElement(By.id('top_of_stack')).getText();
  expect(el).toBe("n/a");
});
