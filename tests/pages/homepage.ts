import { Locator, Page } from "@playwright/test";


export class Homepage {
  readonly page: Page;
  readonly PIM: Locator;
  readonly addemployeebtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.PIM = page.getByRole("link", { name: "PIM" });
    this.addemployeebtn = page.getByRole("link", { name: "Add Employee" });
  }

  async addhomepagedetails() {
    await this.PIM.click();
    await this.addemployeebtn.click();
  }
}