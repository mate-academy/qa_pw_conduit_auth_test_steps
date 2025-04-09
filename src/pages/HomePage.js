import { expect, test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await test.step('Assert the your feed tab is visible', async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
