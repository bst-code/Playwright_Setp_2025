import { defineConfig, devices, firefox } from '@playwright/test';
import type { TestOptions } from './test-options';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 import dotenv from 'dotenv';
 import path from 'path';
 dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig<TestOptions>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  workers: undefined,

  retries: 1,
  reporter: 'html',
  timeout: 60*1000,

  expect:{
    timeout: 90*1000,
  },
  use: {
    baseURL: process.env.ENV ==="QA" ? 'https://qa.playground.bsparksoftwaretechnologies.com' :
             process.env.ENV ==="STG" ? 'https://stg.playground.bsparksoftwaretechnologies.com':
             "https://playground.bsparksoftwaretechnologies.com",

    GMAIL_URL: 'https://www.gmail.com',
    trace: 'on-first-retry',
    headless: false,
    viewport: null,
    launchOptions: {
      args: ['--start-maximized'],
    },

    video:{
      mode:"on",
      size:{
        width: 1920,
        height: 1080
      }
    },

    actionTimeout: 30 * 1000,
    navigationTimeout: 40 * 1000,
  },

  globalSetup: require.resolve('./global_setup.ts'),
  globalTeardown: require.resolve('./global_teardown.ts'),

  

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
     },

    //  {
    //   name: 'QA',
    //   testMatch: 'loginTest.spec.ts',
    //    use: {
    //          baseURL: 'https://qa.playground.bsparksoftwaretechnologies.com',
    //          browserName: 'firefox',
    //          GMAIL_URL: 'https://www.qa.gmail.com',
             
    //    }
    //  }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
