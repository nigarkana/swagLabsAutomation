import {test, expect} from '@playwright/test'
import { type } from 'os';

test ("Login Page Test", async({page})=>{
    //Navigate the URL
    await page.goto("https://www.saucedemo.com/");

    //Enter User Name
    await page.locator("#user-name").fill("standard_user");
    expect(page).toHaveTitle("Swag Labs");

    //Enter Password
    await page.locator("#password").fill("secret_sauce");

    //Click Login button
    await page.getByRole("button").click();
    //expect(page).textContent("Products");

    //Asserts
  
    
    


    await page.waitForTimeout(5000);
})