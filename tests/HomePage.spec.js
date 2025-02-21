import {test, expect} from '@playwright/test'

test("Home Page Testing", async({page})=>{
    //Navigate the URL
    await page.goto("https://www.saucedemo.com/");

    //Assert with Title
    await expect(page).toHaveTitle("Swag Labs");

    await page.waitForTimeout(5000);
})