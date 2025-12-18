import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly userNameInput: Locator;
    readonly userPasswordInput: Locator;
    readonly loginButton: Locator;

    constructor (page: Page){
        this.page = page;
        this.userNameInput = page.getByRole('textbox', { name: 'Username'});
        this.userPasswordInput = page.getByRole('textbox', { name: 'Password'});
        this.loginButton = page.getByRole('button', { name: 'Login'});
    }

    async login(user: string, pass: string){
        await this.userNameInput.fill (user);
        await this.userPasswordInput.fill (pass);
        await this.loginButton.click();
    }

    async assertLoginSucess(){
        await expect (this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
    }
}