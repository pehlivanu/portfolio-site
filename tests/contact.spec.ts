import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Switch to contact view via sidebar
    const contactIcon = page.getByTitle(/contact/i).first();
    await contactIcon.click();
  });

  test('shows validation errors when submitting empty form', async ({ page }) => {
    // Wait for the contact form to appear
    const submitButton = page.locator('form button[type="submit"]');
    await submitButton.click();

    // Verify validation messages appear
    // Usually "Required" or similar error message shows up.
    // We expect at least one element with a text related to validation
    const errorMessages = page.locator('text=/required|invalid|string/i');
    await expect(errorMessages.first()).toBeVisible();
  });

  test('can type in contact form fields', async ({ page }) => {
    // Find inputs
    const nameInput = page.locator('input[name="name"]');
    const emailInput = page.locator('input[name="email"]');
    const messageInput = page.locator('textarea[name="message"]');

    await nameInput.fill('Test User');
    await expect(nameInput).toHaveValue('Test User');

    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com');

    await messageInput.fill('Hello from Playwright!');
    await expect(messageInput).toHaveValue('Hello from Playwright!');
  });
});
