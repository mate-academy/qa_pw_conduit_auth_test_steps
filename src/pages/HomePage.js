import { expect, test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await test.step('Is visible "Your feed tab" text', async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
