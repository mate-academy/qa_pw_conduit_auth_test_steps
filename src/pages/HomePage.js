import { expect, test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await test.step('Assert that Your feed tab is visible', async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
