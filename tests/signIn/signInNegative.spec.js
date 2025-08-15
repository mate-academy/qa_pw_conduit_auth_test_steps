import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';

test.describe('Sign in negative tests', () => {
  let signInPage;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);

    await test.step(`Open 'Sign In' page`, async () => {
      await signInPage.open();
    });
  });

  test('Sign in with empty password', async () => {
    const errorMessage = `password:can't be blank`;

    await test.step(`Fill the 'Email' field`, async () => {
      await signInPage.fillEmailField('test@gmail.com');
    });

    await test.step(`Click the 'Sign in' button`, async () => {
      await signInPage.clickSignInButton();
    });

    await test.step(`Assert the '${errorMessage}' error is shown`, async () => {
      await signInPage.assertErrorMessageContainsText(
        `password:can't be blank`,
      );
    });
  });

  test('Sign in with empty email', async () => {
    const errorMessage = `email:can't be blank`;

    await test.step(`Fill the 'Password' field`, async () => {
      await signInPage.fillPasswordField('newpass123!');
    });

    await test.step(`Click the 'Sign in' button`, async () => {
      await signInPage.clickSignInButton();
    });

    await test.step(`Assert the '${errorMessage}' error is shown`, async () => {
      await signInPage.assertErrorMessageContainsText(`email:can't be blank`);
    });
  });

  test('Sign in with wrong password', async () => {
    const errorMessage = `email or password:is invalid`;

    await test.step(`Fill the 'Email' field`, async () => {
      await signInPage.fillEmailField('test@gmail.com');
    });

    await test.step(`Fill the 'Password' field`, async () => {
      await signInPage.fillPasswordField('1');
    });

    await test.step(`Click the 'Sign in' button`, async () => {
      await signInPage.clickSignInButton();
    });

    await test.step(`Assert the '${errorMessage}' error is shown`, async () => {
      await signInPage.assertErrorMessageContainsText(
        `email or password:is invalid`,
      );
    });
  });
});
