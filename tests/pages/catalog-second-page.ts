import { BasePage } from './base-page';
import { expect } from '@playwright/test';

export class CatalogSecondPage extends BasePage {
  get popularCategories() {
    return this.page.locator('.top-widget__categories-list .top-widget__categories-item');
  }

  async checkPopularCategoriesCount(expectedCount: number) {
    await expect(this.popularCategories).toHaveCount(expectedCount);
  }
}
