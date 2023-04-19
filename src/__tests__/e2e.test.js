import puppeteer from 'puppeteer';
import {jest, test, beforeEach, describe, afterEach} from '@jest/globals';

jest.setTimeout(30000);

describe('page test', () => {
  let browser;
  let page;

  beforeEach(async() => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    });

    page = await browser.newPage()
  });

  test('test add valid class', async () => {
    await page.goto('http://localhost:8080/')

    await page.waitFor('.cube')
    const btn = await page.$('.cube-btn.up')

    await btn.click()

    await page.waitFor('.tooltip')
  })

  afterEach(async () => {
    await browser.close()
  })
});
