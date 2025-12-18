import { Page, Locator, expect } from '@playwright/test';

    export class InventoryPage {
        readonly page: Page;
        readonly inventoryItems: Locator;

    constructor (page: Page){
        this.page = page;
        this.inventoryItems = page.locator('#inventory_container .inventory_item');
    }

    async getInventoryItems() {
        return await this.inventoryItems.all();
    }

    async selectRandomItem(){
        const items = await this.getInventoryItems();
        expect(items.length).toBeGreaterThan(0);

        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
        }        
    }

    