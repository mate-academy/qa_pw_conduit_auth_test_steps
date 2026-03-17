import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';

test.describe('Sign in negative tests', () => {
  let signInPage;
  let user;

  test.beforeEach(async ({ page }) => {
    signInPage = new SignInPage(page);
    await signInPage.open();
    user = {
      email: 'test@gmail.com',
      password: 'newpass123!',
      wrongPassword: '1',
    };
  });

  test('Sign in with empty password', async () => {
    await signInPage.fillEmailField(user.email);
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(`password:can't be blank`);
  });

  test('Sign in with empty email', async () => {
    await signInPage.fillPasswordField(user.password);
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(`email:can't be blank`);
  });

  test('Sign in with wrong password', async () => {
    await signInPage.fillEmailField(user.email);
    await signInPage.fillPasswordField(user.wrongPassword);
    await signInPage.clickSignInButton();
    await signInPage.assertErrorMessageContainsText(
      `email or password:is invalid`,
    );
  });
});
