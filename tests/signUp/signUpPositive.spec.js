import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignUpPage } from '../../src/pages/SignUpPage';
import { HomePage } from '../../src/pages/HomePage';

let signUpPage;
let homePage;
let user;

test.beforeEach(async ({ page }) => {
  signUpPage = new SignUpPage(page);
  homePage = new HomePage(page);

  user = {
    username: `${faker.person.firstName()}_${faker.person.lastName()}`,
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
});

test('Successful `Sign up` flow test', async () => {
  await test.step(`Open 'Sign Up' page`, async () => {
    await signUpPage.open();
  });

  await test.step(`Fill the 'Username' field`, async () => {
    await signUpPage.fillUsernameField(user.username);
  });

  await test.step(`Fill the 'Email' field`, async () => {
    await signUpPage.fillEmailField(user.email);
  });

  await test.step(`Fill the 'Password' field`, async () => {
    await signUpPage.fillPasswordField(user.password);
  });

  await test.step(`Click the 'Sign up' button`, async () => {
    await signUpPage.clickSignUpButton();
  });

  await test.step(`Assert the 'Your Feed' tab is visible`, async () => {
    await homePage.assertYourFeedTabIsVisible();
  });
});
