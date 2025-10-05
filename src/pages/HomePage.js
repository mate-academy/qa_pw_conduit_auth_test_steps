import { test, expect } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible() {
    await test.step('Assert that "Your Feed" tab is visible', async () => {
      // Wait up to 10 seconds for the tab to appear
      await this.yourFeedTab.waitFor({ state: 'visible', timeout: 10000 });

      // Then assert it's visible
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
