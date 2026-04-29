import { expect, test } from '@playwright/test';

export class SignInPage {
  constructor(page) {
    this.page = page;

    this.emailField = page.locator('input[type="email"]');
    this.passwordField = page.locator('input[type="password"]');
    this.signInButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-messages');
  }

  async open() {
    await test.step(`Open 'Sign In' page`, async () => {
      await this.page.goto('/login');
    });
  }

  async fillEmailField(email) {
    await test.step(`Fill the 'Email' field with ${email}`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await test.step(`Fill the 'Password' field`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignInButton() {
    await test.step(`Click the 'Sign in' button`, async () => {
      await this.signInButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await test.step(`Assert error message contains '${messageText}'`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}
