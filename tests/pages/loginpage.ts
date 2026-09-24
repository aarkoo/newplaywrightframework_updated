import { expect, Locator, Page } from "@playwright/test";
import { Env } from "./frameworkconfig/env";

export class Loginpage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginbutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginbutton = page.getByRole("button", { name: "Login" });
  }

  async visit() {
    await this.page.goto(Env.BASE_URL);
  }

  async loginuser() {
    await this.username.fill(Env.APP_USERNAME);
    await this.password.fill(Env.PASSWORD);
    await this.loginbutton.click();
  }

  async pageTitle() {
    await expect(this.page).toHaveTitle("OrangeHRM");
    await this.page.waitForTimeout(3000);
  }
}
