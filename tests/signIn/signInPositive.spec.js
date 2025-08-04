import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';
import { HomePage } from '../../src/pages/HomePage';

let signInPage;
let homePage;
let user;

test.beforeEach(async ({ page }) => {
  signInPage = new SignInPage(page);
  homePage = new HomePage(page);

  user = {
    email: 'test12345678@mail.com',
    password: 'test12345678',
  };
});

test('Successful `Sign in` flow test', async () => {
  await test.step(`Open 'Sign In' page`, async () => {
    await signInPage.open();
  });

  await test.step(`Fill the 'Email' field`, async () => {
    await signInPage.fillEmailField(user.email);
  });

  await test.step(`Fill the 'Password' field`, async () => {
    await signInPage.fillPasswordField(user.password);
  });

  await test.step(`Click the 'Sign in' button`, async () => {
    await signInPage.clickSignInButton();
  });

  await test.step(`Assert the 'Your Feed' tab is visible`, async () => {
    await homePage.assertYourFeedTabIsVisible();
  });
});
