import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

test.describe('Login feature', () => {

  test('Login successfully with valid data', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(loginPage.successMessage)
      .toContainText('You logged into a secure area');
  });

  test('Login failed with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'wrong-password');

    await expect(loginPage.errorMessage)
      .toContainText('Your password is invalid!');
  });

});
