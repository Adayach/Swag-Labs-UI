import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page';
import InventoryPage from '../pageobjects/Inventory.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with <(.*)> and <(.*)>$/, (username, password) => {
     LoginPage.creds(username, password)
     LoginPage.login()
});

Then(/^I should see a flash message for <(.*)>$/, async (errorType) => {
    switch (errorType) {
        case "usernameRequired":
            await expect(LoginPage.userError).toBeExisting();
            break;
        case "passwordRequired":
            await expect(LoginPage.passError).toBeExisting();
            break;        
        case "lockedUser":
            await expect(LoginPage.lockedOutError).toBeExisting();
            break;
        
    }

    
});

