
import { expect, test } from "@playwright/test";
import { Loginpage } from "./pages/Loginpage";

test("login", async ({ page }) => {
  const loginpage = new Loginpage(page);

  await loginpage.visit();
  await loginpage.loginuser();
  await loginpage.pageTitle();
});

