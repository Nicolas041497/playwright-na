import { Browser, BrowserContext, Page, chromium } from '@playwright/test';
import { setWorldConstructor } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  loginPage!: LoginPage;
  inventoryPage!: InventoryPage;

  async init() {
    this.browser = await chromium.launch({ headless: true, args:['--no-sandbox', '--disable-setuid-sandbox'] });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);
  }

  async cleanup() {
    try{
      if (this.page) await this.page.close();
      if (this.context) await this.context.close();
      if (this.browser) await this.browser.close();
  } catch (error){}
}
}

setWorldConstructor(CustomWorld);
