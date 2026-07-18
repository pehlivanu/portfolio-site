import { test, expect } from '@playwright/test';

test('homepage has correct title and sections', async ({ page }) => {
  await page.goto('/');

  // Check title
  await expect(page).toHaveTitle(/Liviu Ionesi/);

  // Check for main sections
  const aboutSection = page.locator('#about');
  await expect(aboutSection).toBeVisible();

  const projectsSection = page.locator('#projects');
  await expect(projectsSection).toBeVisible();

  const experienceSection = page.locator('#experience');
  await expect(experienceSection).toBeVisible();
});
