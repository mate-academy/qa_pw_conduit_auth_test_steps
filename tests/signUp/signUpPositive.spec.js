import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';

test('Successful Sign up flow test', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const homePage = new HomePage(page);

  // Tworzymy dane w lowercase
  const uniqueId = Date.now();
  const username = `user_${uniqueId}`;
  const email = `user_${uniqueId}@example.com`;
  const password = 'password123!'; // lowercase, prostszy, pewny

  await signUpPage.open();
  await signUpPage.fillUsernameField(username);
  await signUpPage.fillEmailField(email);
  await signUpPage.fillPasswordField(password);
  await signUpPage.clickSignUpButton();

  await homePage.assertYourFeedTabIsVisible();
});
