import { test } from '../fixtures/fixtures';
import { URLS } from './utils/catalog-urls';

test('Count popular categories', async ({ mainPage, catalogFirstPage, catalogSecondPage }) => {
  await mainPage.open(URLS.HOME);
  await mainPage.selectCategoryByName(' Товари для дому ');
  await catalogFirstPage.openSubCategoryByName('Посуд');
  await catalogSecondPage.checkPopularCategoriesCount(8);
});
