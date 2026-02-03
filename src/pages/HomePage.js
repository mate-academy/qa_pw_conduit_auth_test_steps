import { expect, test } from '@playwright/test';

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText('Your Feed');
  }

  async assertYourFeedTabIsVisible(yourFeedTabText = 'Your Feed') {
    const stepName = `Assert the '${yourFeedTabText}' tab is visible`;
    await test.step(stepName, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
