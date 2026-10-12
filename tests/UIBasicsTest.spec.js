const{test,expect} = require('@playwright/test');

test('First Playwright test' , async ({page})=>
{

await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

console.log(await page.title());
const userName = page.locator('#username');
const signIn = page.locator('#signInBtn');
const dropdown = page.locator('select.form-control');
const documentLink = page.locator("[href*='documents-request']");


await dropdown.selectOption("consult");

await page.locator(".radiotextsty").last().click();
await page.locator("#okayBtn").click();

console.log(await page.locator(".radiotextsty").last().isChecked());
await expect (page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#terms").click();
await expect (page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();

await documentLink.click();

await page.waitForTimeout(2000);



});

test.only('Child Window handle', async({browser})=>

{
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    
    const[newPage]= await Promise.all([
    context.waitForEvent('page'),
    documentLink.click(),]
    )

    const textNewPage = await newPage.locator(".red").textContent();
    console.log(textNewPage);
    const arrayText = textNewPage.split("@");
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);

    const email = domain.split(".")[0];

    console.log(email);

    await page.locator("#username").type(email);

    await page.pause();



    

}





);