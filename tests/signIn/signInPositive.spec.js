import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';

let signInPage;
let signUpPage;
let homePage;
let user;

test.beforeEach(async ({ page }) => {
  signInPage = new SignInPage(page);
  signUpPage = new SignUpPage(page);
  homePage = new HomePage(page);

  const timestamp = Date.now();
  user = {
    username: `user_${timestamp}`,
    email: `test_${timestamp}@gmail.com`,
    password: 'Password123!',
  };

  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();
});

test('Successful `Sign in` flow test', async () => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
