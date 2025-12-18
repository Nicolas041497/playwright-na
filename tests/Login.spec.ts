import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { InventoryPage } from '../Pages/InventoryPage';

test ('@smoke @login login exitoso y seleccion de item', async ({ page }) => {
  
    await page.goto('https://www.saucedemo.com/');

    const loginPage = new LoginPage (page);
    await loginPage.login ('standard_user', 'secret_sauce');
    await loginPage.assertLoginSucess();    
    
    const inventoryPage = new InventoryPage (page);   
    const randomItem = await inventoryPage.selectRandomItem();
    await expect (randomItem).toBeVisible();    
})