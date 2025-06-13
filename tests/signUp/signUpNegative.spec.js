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

    await test.step('Fill only email and password', async () => {
      await signUpPage.fillEmailField('test@gmail.com');
      await signUpPage.fillPasswordField('newpass123!');
    });

    await test.step('Click Sign Up button', async () => {
      await signUpPage.clickSignUpButton();
    });

    await test.step('Assert error message is shown', async () => {
      await signUpPage.assertErrorMessageContainsText(errorMessage);
    });
  });

  test('Sign up with empty email', async () => {
    await test.step('Fill only username and password', async () => {
      await signUpPage.fillUsernameField('newuser');
      await signUpPage.fillPasswordField('newpass123!');
    });

    await test.step('Click Sign Up button', async () => {
      await signUpPage.clickSignUpButton();
    });

    await test.step('Assert error message is shown', async () => {
      await signUpPage.assertErrorMessageContainsText(
        `email:This email does not seem valid.`,
      );
    });
  });

  test('Sign up with empty password', async () => {
    await test.step('Fill only username and email', async () => {
      await signUpPage.fillUsernameField('newuser');
      await signUpPage.fillEmailField('test@gmail.com');
    });

    await test.step('Click Sign Up button', async () => {
      await signUpPage.clickSignUpButton();
    });

    await test.step('Assert error message is shown', async () => {
       
      await signUpPage.assertErrorMessageContainsText(
        `password:can't be blank`,
      );
    });
  });
});
