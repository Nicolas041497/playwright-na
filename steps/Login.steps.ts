import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Given('the user is on the login page', async function (this: CustomWorld) {
  await this.loginPage.goto();
});

When('the user logs in with valid credentials', async function (this: CustomWorld) {
  await this.loginPage.login('standard_user', 'secret_sauce');
});

Then('the inventory page should be displayed', async function (this: CustomWorld) {
  await this.inventoryPage.assertInventoryIsVisible();
})


