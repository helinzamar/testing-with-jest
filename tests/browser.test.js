const { Builder, By } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replaceAll(/ /g, '%20').replaceAll(/\\/g, '/') + '/../dist/index.html';
let driver;

jest.setTimeout(1000 * 60 * 5); // 5 minuter timeout

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build();
  await driver.get(fileUnderTest);
});

afterAll(async () => {
  await driver.quit();
});

test('Stacken ska vara tom från början', async () => {
  const top = await driver.findElement(By.id('top_of_stack')).getText();
  expect(top).toEqual("n/a");
});
