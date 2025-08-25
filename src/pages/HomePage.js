import { expect, test } from "@playwright/test";

export class HomePage {
  constructor(page) {
    this.page = page;
    this.yourFeedTab = page.getByText("Your Feed");
  }

  async assertYourFeedTabIsVisible() {
    await test.step(`'Your Feed Tab' should be visible`, async () => {
      await expect(this.yourFeedTab).toBeVisible();
    });
  }
}
