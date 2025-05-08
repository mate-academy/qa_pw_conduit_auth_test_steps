import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';

test.describe('Sign up negative tests', () => {
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    await signUpPage.open();
  });

  test('Sign up with empty username', async () => {
    const errorMessage = `username:Username must start with a letter,\
       have no spaces, and be 2 - 40 characters.`;

    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();

    await signUpPage.getErrorMessageText(errorMessage);
  });

  test('Sign up with empty email', async () => {
    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillPasswordField('newpass123!');
    await signUpPage.clickSignUpButton();

    await signUpPage.getErrorMessageText(
      `email:This email does not seem valid.`,
    );
  });

  test('Sign up with empty password', async () => {
    await signUpPage.fillUsernameField('newuser');
    await signUpPage.fillEmailField('test@gmail.com');
    await signUpPage.clickSignUpButton();

    await signUpPage.getErrorMessageText(`password:can't be blank`);
  });
});
