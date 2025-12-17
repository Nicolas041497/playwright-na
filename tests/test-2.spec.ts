import { test, expect } from '@playwright/test';

test ('pruebas', async ({ page }) => {
  
    await page.goto('https://www.saucedemo.com/')
    await page.getByRole('textbox', { name: 'Username'}).fill('standard_user')
    await page.getByRole('textbox', { name: 'Password'}).fill('secret_sauce')
    await page.getByRole('button', { name: 'Login'}).click()
    await page.pause()

    // Variable itemContainer = retorna una lista de todos "all" los elementos localizados con "#inventory_container .inventory_item" .
    const itemsContainer = await page.locator('#inventory_container .inventory_item').all()
    // Variable randomIndex = Variable declarada para encontrar un objeto random de la lista itemsContainer.
    // Math.floor = funcion de Javascript que permite calcular el indice basado en la longitud de la lista.
    const randomIndex = Math.floor(Math.random() * itemsContainer.length)
    // De todos los items que se capturo en itemsContainer deme un indice calculado en randomIndex
    const randomItem = itemsContainer[randomIndex]
    console.log('Total item:', itemsContainer.length)

})