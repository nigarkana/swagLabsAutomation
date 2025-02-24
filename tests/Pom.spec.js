import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'


test ("Handling POM Test", async({page})=>{
    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("pavanol", "test@123")
    await page.waitForTimeout(3000);

    //Home

    //Cart
})