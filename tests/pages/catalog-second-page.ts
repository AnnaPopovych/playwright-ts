import { BasePage } from './base-page';
import { URLS } from '../utils/urls';
import {expect} from "@playwright/test";

export class CatalogSecondPage extends BasePage {
    private readonly path = URLS.KITCHEN_UTENSILS;

    get pageLayout() {
        return this.page.locator('.layout .portal__heading');
    }

    get popularCategories() {
        return this.page.locator('.top-widget__categories-list .top-widget__categories-item');
    }

    async checkPopularCategoriesCount(expectedCount: number) {
        await expect(this.popularCategories).toHaveCount(expectedCount);
    }

}