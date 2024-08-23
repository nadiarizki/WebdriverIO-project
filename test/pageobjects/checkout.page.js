import Page from './page.js';
import { $, browser, expect } from '@wdio/globals'

class checkoutPage extends Page {

    get itemName() {
        return $('//div[text()="Sauce Labs Backpack"]');
    }

    // validate user is redirected to checkout page and item is added to cart
    async validateItemAddedToCart () {
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await expect(this.itemName).toBeExisting({ timeout: 3000 });

    }

    open() {
        return super.open('cart.html');
 }
}
   
export default new checkoutPage();