import {BasePage} from "./base-page";
import {URLS} from "../utils/urls";
import {Locator} from "@playwright/test";

export class CatalogFirstPage extends BasePage{
    private readonly path = URLS.HOUSEHOLD_GOODS;

    get pageLayout() {
        return this.page.locator('.layout .portal__heading');
    }

    get categoryTiles(): Locator {
        return this.page.locator('.tile-cats__heading');
    }

    async openSubCategoryByName(subCategoryName: string) {
        const targetCategory = this.categoryTiles.filter({ hasText: subCategoryName });
        await targetCategory.waitFor({ state: 'visible' });
        await targetCategory.click();
    }
}
