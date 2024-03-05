const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('Untitled', function() {
  this.timeout(30000);
  let driver;
  let vars;
  beforeEach(async function() {
    const options = new chrome.Options();
    options.addArguments('--headless');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    vars = {};
  });
  afterEach(async function() {
    await driver.quit();
  });
  it('Untitled', async function() {
    await driver.get("http://localhost:3001/greeting.html")
    await driver.findElement(By.id("nameInput")).click()
    await driver.findElement(By.id("nameInput")).sendKeys("Hans")
    await driver.findElement(By.css("button")).click()
    await driver.wait(until.elementIsVisible(await driver.findElement(By.id("greetingMessage"))), 3000)
    assert(await driver.findElement(By.id("greetingMessage")).getText() == "Hello, Hans!")
  })
})
