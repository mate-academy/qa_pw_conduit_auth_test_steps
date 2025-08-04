import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';

test.describe('Sign up negative tests', () => {
  let signUpPage;

  test.beforeEach(async ({ page }) => {
    signUpPage = new SignUpPage(page);
    await test.step(`Open 'Sign Up' page`, async () => {
      await signUpPage.open();
    });
  });

  test('Sign up with empty username', async () => {
    const errorMessage = `username:Username must start with a letter,\
       have no spaces, and be 2 - 40 characters.`;

    await test.step(`Fill the 'Email' field`, async () => {
      await signUpPage.fillEmailField('test@gmail.com');
    });

    await test.step(`Fill the 'Password' field`, async () => {
      await signUpPage.fillPasswordField('newpass123!');
    });

    await test.step(`Click the 'Sign up' button`, async () => {
      await signUpPage.clickSignUpButton();
    });

    await test.step(`Assert the '${errorMessage}' error is shown`, async () => {
      await signUpPage.assertErrorMessageContainsText(errorMessage);
    });
  });

  test('Sign up with empty email', async () => {
    const errorMessage = `email:This email does not seem valid.`;

    await test.step(`Fill the 'Username' field`, async () => {
      await signUpPage.fillUsernameField('newuser');
    });

    await test.step(`Fill the 'Password' field`, async () => {
      await signUpPage.fillPasswordField('newpass123!');
    });

    await test.step(`Click the 'Sign up' button`, async () => {
      await signUpPage.clickSignUpButton();
    });

    await test.step(`Assert the '${errorMessage}' error is shown`, async () => {
      await signUpPage.assertErrorMessageContainsText(
        `email:This email does not seem valid.`,
      );
    });
  });

  test('Sign up with empty password', async () => {
    const errorMessage = `password:can't be blank`;

    await test.step(`Fill the 'Username' field`, async () => {
      await signUpPage.fillUsernameField('newuser');
    });

    await test.step(`Fill the 'Email' field`, async () => {
      await signUpPage.fillEmailField('test@gmail.com');
    });

    await test.step(`Click the 'Sign up' button`, async () => {
      await signUpPage.clickSignUpButton();
    });

    await test.step(`Assert the '${errorMessage}' error is shown`, async () => {
      await signUpPage.assertErrorMessageContainsText(
        `password:can't be blank`,
      );
    });
  });
});
