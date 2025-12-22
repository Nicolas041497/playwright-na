import { Page, Locator, expect } from '@playwright/test';

    export class InventoryPage {
        readonly page: Page;
        readonly inventoryContainer: Locator;
        readonly inventoryItems: Locator;

    constructor (page: Page){
        this.page = page;
        this.inventoryContainer = page.locator('[data-test="inventory-container"]');
        this.inventoryItems = this.inventoryContainer.locator('#inventory_container .inventory_item');
    }    

    async assertInventoryIsVisible(){
        await this.inventoryContainer.waitFor({
            state: 'visible',
            timeout:10000,
        });

        await expect(this.inventoryContainer).toBeVisible();
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

    