import { expect, test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage';
import { HomePage } from '../../src/pages/HomePage';

let signInPage;
let homePage;
let user;

test.beforeEach(async ({ page, request }) => {
  signInPage = new SignInPage(page);
  homePage = new HomePage(page);

  const uniqueId = Date.now();
  user = {
    email: `test_new_user_${uniqueId}@mail.com`,
    password: 'newpass123!',
  };

  const signUpResponse = await request.post('/api/users', {
    data: {
      user: {
        username: `testuser_${uniqueId}`,
        email: user.email,
        password: user.password,
      },
    },
  });

  expect(signUpResponse.ok()).toBeTruthy();
});

test('Successful `Sign in` flow test', async () => {
  await signInPage.open();
  await signInPage.fillEmailField(user.email);
  await signInPage.fillPasswordField(user.password);
  await signInPage.clickSignInButton();

  await homePage.assertYourFeedTabIsVisible();
});
