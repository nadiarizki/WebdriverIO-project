import { $, expect, browser } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    // deifine selectors
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginButton () {
        return $('//input[@type="submit"]');
    }

    get errorMessage () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }

    //login using username and password
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }


    //validate incorrect password error message is displayed
    async validateWrongPasswordError () {
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining('Epic sadface: Username and password do not match any user in this service')
        )
    }

    //open login page
    open () {
        return super.open('');
    }
}

export default new LoginPage();
