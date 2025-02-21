import {test, expect} from '@playwright/test'

test ("Login Page Test", async({page})=>{
    //Navigate the URL
    await page.goto("https://www.saucedemo.com/");

    //Enter User Name
    await page.locator("#user-name").fill("standard_user");

    //Enter Password
    


    await page.waitForTimeout(5000);
})