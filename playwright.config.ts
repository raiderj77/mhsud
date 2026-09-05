import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser', workers: 1, timeout: 45000, retries: 0,
  reporter: 'line', forbidOnly: !!process.env.CI,
  use: { baseURL: 'http://127.0.0.1:4311', trace: 'off', screenshot: 'off', video: 'off' },
  webServer: { command: 'npm run start -- --hostname 127.0.0.1 --port 4311', url: 'http://127.0.0.1:4311', reuseExistingServer: false, timeout: 60000 },
});
