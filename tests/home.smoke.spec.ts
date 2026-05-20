import { expect, test } from '../fixtures/fixtures';
import { URLS } from './utils/catalog-urls';

test('Home page loads with category menu', async ({ mainPage }) => {
  await mainPage.open(URLS.HOME);
  await expect(mainPage.sideMenuCategories.first()).toBeVisible();
});
