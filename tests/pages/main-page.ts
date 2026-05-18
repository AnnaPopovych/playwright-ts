import { BasePage } from './base-page';
import { Locator } from '@playwright/test';

export class MainPage extends BasePage {

  get sideMenuCategories(): Locator {
    return this.page.locator('[data-testid="fat_menu_category_link"]');
  }

  async selectCategoryByName(categoryName: string) {
    const target = this.sideMenuCategories.filter({ hasText: categoryName });
    await target.click();
  }
}
