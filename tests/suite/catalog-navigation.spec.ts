import { test, expect } from '../fixtures/fixtures';
import { URLS } from '../utils/urls';

test.describe('Navigation in categories', () => {

  test('Count popular categories', async ({ mainPage, catalogFirstPage, catalogSecondPage }) => {


    await mainPage.open(URLS.HOME);
    await mainPage.selectCategoryByName(' Товари для дому ');
    await catalogFirstPage.openSubCategoryByName('Посуд');
    await catalogSecondPage.checkPopularCategoriesCount(8);
  });
});