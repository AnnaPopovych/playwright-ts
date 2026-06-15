import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 2,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    baseURL: 'https://rozetka.com.ua/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    headless: false,
    video: {
      mode: 'retain-on-failure',
      size: { width: 640, height: 480 },
    },
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
  },
  expect: { timeout: 30_000 },
  projects: [
    {
      name: 'smoke-chromium',
      testMatch: /.*\.smoke\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'smoke-firefox',
      testMatch: /.*\.smoke\.spec\.ts/,
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'catalog',
      testMatch: /.*\.catalog\.spec\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
