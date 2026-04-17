import { test,expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByRole('link', { name: 'Your Feed' });
  }

  async assertYourFeedTabIsVisible() {
    await test.step("Assert 'Your Feed' tab is visible", async () => {
    await expect(this.page).toHaveURL(/.*/);
    await expect(this.yourFeedTab).toBeVisible();
  });
 }
}
