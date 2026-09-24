import { expect, test } from "@playwright/test";
import { Loginpage } from "./pages/Loginpage";
import { Homepage } from "./pages/homepage";

test("homepagedetails", async ({ page }) => {
  const loginpage = new Loginpage(page);

  await loginpage.visit();
  await loginpage.loginuser();

  await expect(page.getByRole("link", { name: "PIM" })).toBeVisible();

  const homepage1 = new Homepage(page);
  await homepage1.addhomepagedetails();
});
