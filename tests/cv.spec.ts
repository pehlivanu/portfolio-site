import { test, expect } from '@playwright/test';

test.describe('CV Routing', () => {
  test('Visual CV renders correctly', async ({ page }) => {
    // Navigating to the visual CV standalone page
    await page.goto('/cv');

    // It should render the visual CV structure
    const mainCvContainer = page.locator('.cv-page-container');
    await expect(mainCvContainer).toBeVisible();

    // Verify some text or sections exist (experience, education)
    await expect(page.getByText(/experience|erfahrung/i).first()).toBeVisible();
    await expect(page.getByText(/education|ausbildung/i).first()).toBeVisible();
  });

  test('ATS CV renders correctly', async ({ page }) => {
    // Navigating to the ATS text-only CV
    await page.goto('/cv-ats');

    // It should render the ATS CV structure
    const mainCvContainer = page.locator('.ats-page-container');
    await expect(mainCvContainer).toBeVisible();

    // ATS mode shouldn't have complex decorative images, it's text-focused
    await expect(page.getByText(/experience|erfahrung/i).first()).toBeVisible();
    await expect(page.getByText(/education|ausbildung/i).first()).toBeVisible();
    await expect(page.getByText(/projects|projekte/i).first()).toBeVisible();
  });
});
