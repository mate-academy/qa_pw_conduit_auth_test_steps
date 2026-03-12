import { expect, test } from '@playwright/test';

export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder('Username');
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    this.errorMessage = page.getByRole('list').nth(1);
  }

  async open() {
    await test.step(`openSignUpPage`, async () => {
      await this.page.goto('/user/register');
    });
  }

  async fillUsernameField(username) {
    await test.step(`fillUsernameField`, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await test.step(`fillEmailField`, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await test.step(`fillPasswordField`, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignUpButton() {
    await test.step(`clickSignUpButton`, async () => {
      await this.signUpButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await test.step(`assertErrorMessageContainsText`, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}
