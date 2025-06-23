import test, { expect } from '@playwright/test';

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
    await test.step('Open register page', async () => {
      await this.page.goto('/user/register');
    });
  }

  async fillUsernameField(username) {
    await test.step('Add user name text to user name field', async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    await test.step('Add email address text to email field', async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    await test.step('Add user password to password field', async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignUpButton() {
    await test.step('Click sign in button', async () => {
      await this.signUpButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    await test.step(
      `Assert error message has text ${messageText}`,
      async () => {
        await expect(this.errorMessage).toContainText(messageText);
      })
  }
}
