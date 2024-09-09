import loginPage from '../pageobjects/login.page';
import homePage from '../pageobjects/home.page';
import checkoutPage from '../pageobjects/checkout.page';

describe('Test Saucedemo', () => {
    it('Test 3 - Success login - page object based', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await homePage.validateOnHomePage();
        await homePage.addItemToCart();
        await homePage.clickCartIcon();
        await checkoutPage.validateItemAddedToCart()
    });

    it('Test 4 - Failed login - page object based', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauces');
        await loginPage.validateWrongPasswordError();
    });
});
