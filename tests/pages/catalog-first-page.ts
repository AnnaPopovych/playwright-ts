import { BasePage } from './base-page';
import { Locator } from '@playwright/test';

export class CatalogFirstPage extends BasePage {
  get pageLayout() {
    return this.page.locator('.layout .portal__heading');
  }

  get categoryTiles(): Locator {
    return this.page.locator('.tile-cats__heading');
  }

  async openSubCategoryByName(subCategoryName: string) {
    const targetCategory = this.categoryTiles.filter({ hasText: subCategoryName });
    await targetCategory.click();
  }
}
