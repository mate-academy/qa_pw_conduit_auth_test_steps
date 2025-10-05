import { test, expect } from '@playwright/test';

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
    const stepDesc = 'Open the Sign Up page';
    await test.step(stepDesc, async () => {
      await this.page.goto('/user/register');
    });
  }

  async fillUsernameField(username) {
    const stepDesc = `Fill Username field with "${username}"`;
    await test.step(stepDesc, async () => {
      await this.usernameField.fill(username);
    });
  }

  async fillEmailField(email) {
    const stepDesc = `Fill Email field with "${email}"`;
    await test.step(stepDesc, async () => {
      await this.emailField.fill(email);
    });
  }

  async fillPasswordField(password) {
    const stepDesc = 'Fill Password field';
    await test.step(stepDesc, async () => {
      await this.passwordField.fill(password);
    });
  }

  async clickSignUpButton() {
    const stepDesc = 'Click "Sign up" button';
    await test.step(stepDesc, async () => {
      await this.signUpButton.click();
    });
  }

  async assertErrorMessageContainsText(messageText) {
    const stepDesc = `Assert error message contains text: "${messageText}"`;
    await test.step(stepDesc, async () => {
      await expect(this.errorMessage).toContainText(messageText);
    });
  }
}
