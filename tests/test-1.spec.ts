import { test, expect } from '@playwright/test';

test('buscar', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.locator('input[id=\"cb1-edit\"]').fill('Iphone') // Localiza el Browser y le ordena llenarlo con la palabra 
    // "Iphone"
  await page.keyboard.press('Enter') // Valores de las teclas que se pueden presionar.

  await expect(page.locator('//ol[contains(@class,\'ui-search-layout\')]')).toBeVisible()
    // realiza una asersion de espera // expect es funcion para que espere // El "//" se usa para el metodo de busqueda 
    // Xpath --- 
    // ol= order list // la propiedad debe ir presedidad de una @, se identifica que la classe tiene varias propiedades 
    // por que contienen espacios y se puede localizar con cualquiera de ellas
    // funcion contains @ class y uno de los valores entre []. // toBeVisible = Hace una espera cuando localiza el elemento.
    // await page.pause() // pausar en un momento determinado la prueba.
  const titles = await page.locator('//ol[contains(@class, \'ui-search-layout\')]//li//h3').allInnerTexts()
    //AllInnerTexts trae toda la lista que se localizo por medio de la siguiete ruta, que puntualmente son los titulos de cada
    //articulo encontrado como iphone, por otra parte esta lista se guarta en la variable const tittles.
    //este metodo se conoce como Webscarping = se saca informacion de alguna pagina y se puede almacenar en una base de datos
    //para poder procesar la informacion.
  console.log('the total number  of result is:', titles.length)
    //Este console muestra la longitud de toda la lista almacenada en const tittles.
  for(let title of titles){
      console.log('the title is:', title)
  }  
  // por medio de este ciclo for se itera por toda lista que se almaceno dentro de la variable const titles.
  await page.pause()
});

//test('Otros metodos', async ({ page }) => {
  
    //getByPlaceholder = permite encontrar un elemento por la propiedad "placehorder" y el valor.
    //await page.getByPlaceholder('').click()
    //getByAltText = Permite encontrar un elemento basado en propiedad "alt" y el valor, normalmente aplica para imagenes.
    //await page.getByAltText('').click() 
    //getbyrole = permite identificar elementos basados en sus nombres accesibles
  //await page.goto('https://www.mercadolibre.com.co/');
    //await page.getByRole('link' {name: 'Mis compras'}).click()
  //await page.getByRole('link', { name: 'Vender', exact: true }).click()
    // Buscar por medio del metodo getByRole por medio de su accessibility, el parametro exact: true es ya que enontro dos
    // elementos con las mismas caracterisitas por lo brinda la exactitud de el.
  //await page.pause()    
//});