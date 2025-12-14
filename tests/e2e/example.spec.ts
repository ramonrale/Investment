import { test, expect } from '@playwright/test';

test('landing page has hero text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.getByText('US Stock Portfolio OS')).toBeVisible();
});
