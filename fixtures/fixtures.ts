import { test as base } from '@playwright/test';
import { MainPage } from '../tests/pages/main-page';
import { CatalogFirstPage } from '../tests/pages/catalog-first-page';
import { CatalogSecondPage } from '../tests/pages/catalog-second-page';

type catalogPagesFixtures = {
  mainPage: MainPage;
  catalogFirstPage: CatalogFirstPage;
  catalogSecondPage: CatalogSecondPage;
};

export const test = base.extend<catalogPagesFixtures>({
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  catalogFirstPage: async ({ page }, use) => {
    await use(new CatalogFirstPage(page));
  },
  catalogSecondPage: async ({ page }, use) => {
    await use(new CatalogSecondPage(page));
  },
});

export { expect } from '@playwright/test';
