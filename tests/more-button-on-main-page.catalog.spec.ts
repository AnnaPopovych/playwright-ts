import { test, expect } from '../fixtures/fixtures';
import { URLS } from './utils/catalog-urls';

test('More button on main page', async ({ mainPage }) => {
  await mainPage.open(URLS.HOME);

  await expect(mainPage.listBestForYou).toBeVisible();
  await mainPage.scrollUntilMoreButtonVisible();

  await expect(mainPage.moreButton).toHaveText('Показати ще');
});
