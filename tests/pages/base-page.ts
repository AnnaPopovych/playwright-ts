import { Locator, Page } from '@playwright/test';

export abstract class BasePage {
  readonly page: Page;

  abstract get pageLayout(): Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async open(url: string) {
    await this.page.goto(url, { waitUntil: 'load' });
  }
}
