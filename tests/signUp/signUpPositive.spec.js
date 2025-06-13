import { test, expect } from '@playwright/test';
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
  await test.step('Open Sign Up page', async () => {
    await signUpPage.open();
  });

  await test.step('Fill Sign Up form', async () => {
    await signUpPage.fillUsernameField(user.username);
    await signUpPage.fillEmailField(user.email);
    await signUpPage.fillPasswordField(user.password);
  });

  await test.step('Submit Sign Up form', async () => {
    await signUpPage.clickSignUpButton();
  });

  // eslint-disable-next-line max-len
  await test.step('Assert user is redirected to Home and sees Your Feed tab', async () => {
    await expect(homePage.yourFeedTab).toBeVisible();
  });
});
