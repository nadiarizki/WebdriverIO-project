import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

class homePage extends Page {

    get addItemToCartButton () {  
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartIcon () {  
        return $('//a[@class="shopping_cart_link"]');
    }

    get productImage(){
        return $('//img[@alt="Sauce Labs Backpack"]'); 
    }

    get productImage(){
        return $('//img[@alt="Sauce Labs Backpack"]');
        
    }

    // validate user is redirected to home page
    async validateOnHomePage () {
        await expect(this.productImage).toBeExisting();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveTitle('Swag Labs');
    }

    // add item to cart
    async addItemToCart () {
        await this.addItemToCartButton.click();
    }

    // click cart icon
    async clickCartIcon () {
        await this.cartIcon.click();
    }

    open() {
        return super.open('inventory.html');
    }
}
   
export default new homePage();