import test, { expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await test.step('assert your feed tab is visible', async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
