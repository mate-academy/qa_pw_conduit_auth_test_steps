import { test } from '@playwright/test';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { SignInPage } from '../../src/pages/SignInPage';
import { HomePage } from '../../src/pages/HomePage';

test('Successful Sign in flow test', async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const signInPage = new SignInPage(page);
  const homePage = new HomePage(page);

  // Wszystko lowercase
  const uniqueId = Date.now();
  const username = `user_${uniqueId}`;
  const email = `user_${uniqueId}@example.com`;
  const password = 'password123!';

  // 1️⃣ Zarejestruj użytkownika
  await signUpPage.open();
  await signUpPage.fillUsernameField(username);
  await signUpPage.fillEmailField(email);
  await signUpPage.fillPasswordField(password);
  await signUpPage.clickSignUpButton();
  await homePage.assertYourFeedTabIsVisible();

  // 2️⃣ Zaloguj się z tymi samymi danymi (lowercase)
  await signInPage.open();
  await signInPage.fillEmailField(email);
  await signInPage.fillPasswordField(password);
  await signInPage.clickSignInButton();

  // 3️⃣ Sprawdź, że home page się załadował
  await homePage.assertYourFeedTabIsVisible();
});
