import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import playwright from 'eslint-plugin-playwright';
import tseslint from 'typescript-eslint';

const playwrightRecommended = playwright.configs['flat/recommended'];

export default tseslint.config(
  {
    ignores: ['node_modules/**', 'test-results/**', 'playwright-report/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['tests/**/*.ts', 'playwright.config.ts'],
    plugins: playwrightRecommended.plugins,
    languageOptions: playwrightRecommended.languageOptions,
    rules: {
      ...playwrightRecommended.rules,
      'playwright/expect-expect': ['warn', { assertFunctionPatterns: ['^check[A-Z]'] }],
    },
  },
  eslintConfigPrettier,
);
