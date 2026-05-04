import { test as base } from '@playwright/test';
import { MainPage } from '../pages/main-page';
import { CatalogFirstPage } from '../pages/catalog-first-page';
import { CatalogSecondPage } from '../pages/catalog-second-page';

type MyFixtures = {
    mainPage: MainPage;
    catalogFirstPage: CatalogFirstPage;
    catalogSecondPage: CatalogSecondPage;
};

export const test = base.extend<MyFixtures>({
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