import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: "https://the-internet.herokuapp.com",
    headless: true, // Run tests in headless mode
    viewport: { width: 1280, height: 720 },
    screenshot: 'on', // Take screenshots on test failures
    video: 'retain-on-failure', // Record videos only on failures
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
};

export default config;
