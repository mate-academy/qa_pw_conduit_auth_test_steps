import { test, expect } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';

test.describe('Sign up negative tests', () => {
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    await signUpPage.open();
  });

  test('Sign up with empty username', async () => {
    const expectedMessage = `username:Username must start with a letter,\
       have no spaces, and be 2 - 40 characters.`;

    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();

    const actualMessage = await signUpPage.getErrorMessageText();
    expect(actualMessage.replace(/\s+/g, ' ').trim()).toContain(
      expectedMessage.replace(/\s+/g, ' ').trim(),
    );
  });

  test('Sign up with empty email', async () => {
    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();

    const actualMessage = await signUpPage.getErrorMessageText();
    expect(actualMessage).toContain('email:This email does not seem valid.');
  });

  test('Sign up with empty password', async () => {
    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.clickSignUpButton();

    const actualMessage = await signUpPage.getErrorMessageText();
    expect(actualMessage).toContain(`password:can't be blank`);
  });
});
