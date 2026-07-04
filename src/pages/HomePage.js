import { expect, test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.locator('a.nav-link.active');
  }

  async assertYourFeedTabIsVisible() {
    await test.step(`Assert 'Your Feed' tab is visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible({ timeout: 15000 });
    });
  }
}
