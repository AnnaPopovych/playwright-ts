import { test, expect } from '../fixtures/fixtures';

test('Load more footer on the Deals page is visible', async ({ dealsPage }) => {
  await dealsPage.goto();
  await dealsPage.acceptCookies();

  await expect(dealsPage.listItems.first()).toBeVisible();
  await dealsPage.scrollUntilLoadMoreFooterVisible();
  await expect(dealsPage.loadMoreFooter).toBeVisible();
});
