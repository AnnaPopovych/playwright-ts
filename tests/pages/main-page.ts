import { BasePage } from './base-page';
import { Locator } from '@playwright/test';

export class MainPage extends BasePage {
  get sideMenuCategories(): Locator {
    return this.page.locator('[data-testid="fat_menu_category_link"]');
  }

  get listBestForYou(): Locator {
    return this.page.locator('.goods-sections-best.indent');
  }

  get moreButton(): Locator {
    return this.page.locator('button.read-more-btn.button.button_size_medium.button_color_green');
  }

  async selectCategoryByName(categoryName: string) {
    const target = this.sideMenuCategories.filter({ hasText: categoryName });
    await target.click();
  }

  async scrollUntilMoreButtonVisible() {
    let previousHeight = 0;

    while (true) {
      if (await this.moreButton.isVisible()) {
        return;
      }

      const currentHeight = await this.page.evaluate(() => document.body.scrollHeight);

      if (currentHeight === previousHeight) {
        break;
      }

      previousHeight = currentHeight;
      await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await this.page
        .waitForFunction((h) => document.body.scrollHeight > h, previousHeight)
        .catch(() => {});
    }

    await this.moreButton.scrollIntoViewIfNeeded();
  }
}
