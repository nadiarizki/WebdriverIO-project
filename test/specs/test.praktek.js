//import browser from 'wd';
// import { expect } from '@wdio/globals'
// import { assert } from '@wdio/globals'
//const assert = require('assert');
import { expect } from '@wdio/globals'
//import { assert } from '@wdio/globals'

//const expect = require('expect');



describe('Test Saucedemo', () => {
    it('Test 1 - Success login', async () => {
        await browser.url('https://www.saucedemo.com/');
        //5000 = 5s
        await browser.pause(5000);

        // get element by id
        const usernameTextbox = await browser.$('#user-name');
        const addToCart = await browser.$('#add-to-cart-sauce-labs-backpack');

        // get element by xpath
        const loginButton = await browser.$('//input[@type="submit"]');
        const inventoryItemName = await browser.$('//div[@class="inventory_item_name"]');
        const cartIcon = await browser.$('//a[@class="shopping_cart_link"]');

        // user login
        //await browser.$("#user-name").addValue("standard_user");
        await usernameTextbox.clearValue();
        await usernameTextbox.addValue("standard_user");
        await browser.$("#password").addValue("secret_sauce");
        await loginButton.click();
        
        // validate user is redirected to inventory page
        await browser.pause(5000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');

        // add item to cart
        await addToCart.click();

        // validate item added to cart
        await cartIcon.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(inventoryItemName).toBeDisplayed();
    

    });
});