const puppeteer = require('puppeteer');

(async() => {

const browser = await puppeteer.launch({ headless: false });

const page = await browser.newPage();

await page.goto('https://mern-expense-tracker.netlify.app/');

await page.waitForSelector('#root > div > div > div > div.income > p')

let data = await page.$('#root > div > div > div > div.income > p');

let evalData = await page.evaluate((el) => {
    return el.textContent
}, data)

console.log(evalData);

await page.click('#root > div > div > form > div:nth-child(2) > div > button')

await page.waitFor(3 * 1000);

let buttonData = await page.$('#root > div > div > form > div:nth-child(2) > div > button')
let evalButtonData = await page.evaluate((el) => {
    return el.textContent
}, buttonData)

console.log(evalButtonData)

await page.type('#root > div > div > form > div:nth-child(1) > input[type=text]', 'Yop!')

await page.type('#root > div > div > form > div:nth-child(2) > div > input[type=number]', '9999')


await page.waitFor(3 * 1000);


await page.click('#root > div > div > form > button')

await page.waitFor(3 * 1000);

browser.close();

})();

