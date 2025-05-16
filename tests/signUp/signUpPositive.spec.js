import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';

let signUpPage;
let homePage;
let user;

test.beforeEach(async ({ page }) => {
  signUpPage = new SignUpPage(page);
  homePage = new HomePage(page);

  user = {
    username: `Ser_Ana1`,
    email: `ser_ana1@gmail.com`,
    password: `newpass123!`,
  };
});

test('Successful `Sign up` flow test', async () => {
  await signUpPage.open();
  await signUpPage.fillUsernameField(user.username);
  await signUpPage.fillEmailField(user.email);
  await signUpPage.fillPasswordField(user.password);
  await signUpPage.clickSignUpButton();

  await homePage.assertYourFeedTabIsVisible();
});
