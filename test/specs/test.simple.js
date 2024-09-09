import { expect, browser } from '@wdio/globals'

describe('Test Saucedemo', () => {
    it('Test 1 - Success login', async () => {
        await browser.url(process.env.BASE_URL);

        
        //3000 = 3s
        await browser.pause(3000);

        // get element by id
        const usernameTextbox = await browser.$('#user-name');
        const addToCart = await browser.$('#add-to-cart-sauce-labs-backpack');

        // get element by xpath
        const loginButton = await browser.$('//input[@type="submit"]');
        const inventoryItemName = await browser.$('//div[@class="inventory_item_name"]');
        const cartIcon = await browser.$('//a[@class="shopping_cart_link"]');

        // user login
        await browser.$("#user-name").addValue("standard_user");
        await usernameTextbox.waitForDisplayed({ timeout: 3000 });
        await usernameTextbox.clearValue();
        await usernameTextbox.addValue("standard_user");
        await browser.$("#password").addValue("secret_sauce");
        await loginButton.click();

        // validate user is redirected to inventory page
        await browser.pause(3000);
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');

        // add item to cart
        await addToCart.click();

        // validate item added to cart
        await cartIcon.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(inventoryItemName).toBeDisplayed();


    });

    it('Test 2 - Failed login', async () => {
        await browser.url('https://www.saucedemo.com/');

        // get element by id
        const usernameTextbox = await browser.$('#user-name');
        const addToCart = await browser.$('#add-to-cart-sauce-labs-backpack');

        // get element by xpath
        const loginButton = await browser.$('//input[@type="submit"]');

        // user login
        await browser.$("#user-name").addValue("standard_user");
        await usernameTextbox.waitForDisplayed({ timeout: 3000 });
        await usernameTextbox.clearValue();
        await usernameTextbox.addValue("standard_user");
        await browser.$("#password").addValue("secret");
        await loginButton.click();

        // validate error message is displayed
        const errormessageBox = await browser.$('//*[@id="login_button_container"]/div/form/div[3]/h3');
        const errorMessage = await errormessageBox.getText();
        await expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('Test 1 - Success checkout item', async () => {
        await browser.url('https://www.saucedemo.com/');
        //3000 = 3s
        await browser.pause(3000);

        // get element by id
        const usernameTextbox = await browser.$('#user-name');
        const addToCart = await browser.$('#add-to-cart-sauce-labs-backpack');

        // get element by xpath
        const loginButton = await browser.$('//input[@type="submit"]');
        const inventoryItemName = await browser.$('//div[@class="inventory_item_name"]');
        const cartIcon = await browser.$('//a[@class="shopping_cart_link"]');

        // user login
        // await browser.$("#user-name").addValue("standard_user");
        await usernameTextbox.waitForDisplayed({ timeout: 3000 });
        await usernameTextbox.clearValue();
        await usernameTextbox.addValue("standard_user");
        await browser.$("#password").addValue("secret_sauce");
        await loginButton.click();

        // validate user is redirected to inventory page
        await browser.pause(3000);
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