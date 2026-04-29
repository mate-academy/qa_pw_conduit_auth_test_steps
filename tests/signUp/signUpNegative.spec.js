import { expect, test } from '@playwright/test';

export class SignUpPage {
  constructor(page) {
    this.page = page;

    this.usernameField = page.locator('input[placeholder="Username"]');
    this.emailField = page.locator('input[placeholder="Email"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.signUpButton = page.locator('button[type="submit"]');
    this.errorMessage = page.locator('.error-messages');
  }

  async open() {
    await test.step(`Open 'Sign Up' page`, async () => {
      await this.page.goto('/register');
    });
  }

  async fillUsernameField(username) {
    await test.step(`Fill the 'Username' field with ${username}`, async () => {
      await this.usernameField.fill(username);
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

  async clickSignUpButton() {
    await test.step(`Click the 'Sign up' button`, async () => {
      await this.signUpButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await test.step(`Assert error message contains '${messageText}'`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}
