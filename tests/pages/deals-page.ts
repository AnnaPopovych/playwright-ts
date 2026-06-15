import { Locator } from '@playwright/test';
import { BasePage } from './base-page';

export class DealsPage extends BasePage {
  readonly path = 'https://www.amazon.es/deals';

  get listItems(): Locator {
    return this.page.getByRole('listitem');
  }

  get loadMoreFooter(): Locator {
    return this.page.locator('[data-testid="load-more-footer"]');
  }

  get acceptCookiesButton(): Locator {
    return this.page.locator('#sp-cc-accept');
  }

  async goto() {
    await this.open(this.path);
  }

  async acceptCookies() {
    await this.acceptCookiesButton.click({ timeout: 5_000 }).catch(() => {});
  }

  private async isInViewport(locator: Locator): Promise<boolean> {
    return locator
      .evaluate((element) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

        return (
          rect.bottom > 0 &&
          rect.right > 0 &&
          rect.top < viewportHeight &&
          rect.left < viewportWidth
        );
      })
      .catch(() => false);
  }

  async scrollUntilVisible(locator: Locator, step = 400, maxScroll = 10_000) {
    let scrollAttempt = 0;

    for (let scrolled = 0; scrolled <= maxScroll; scrolled += step) {
      if ((await locator.isVisible()) && (await this.isInViewport(locator))) {
        console.info(`Element in viewport after ${scrollAttempt} wheel scroll(s)`);
        await locator.scrollIntoViewIfNeeded();
        return;
      }

      scrollAttempt += 1;
      const previousScrollY = await this.page.evaluate(() => window.scrollY);
      console.info(
        `[wheel ${scrollAttempt}] Current scrollY before scrolling: ${previousScrollY}px`,
      );
      console.info(`[wheel ${scrollAttempt}] Perform scrolling by ${step}px`);
      await this.page.mouse.wheel(0, step);
    }

    throw new Error(
      `Element not in viewport after ${scrollAttempt} wheel scroll(s) (${maxScroll}px total)`,
    );
  }

  async scrollUntilLoadMoreFooterVisible() {
    await this.scrollUntilVisible(this.loadMoreFooter);
  }
}
