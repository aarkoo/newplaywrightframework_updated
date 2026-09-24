import { expect } from "@playwright/test";
import { test } from "./fixtures/customfixture";
import { Loginpage } from "./pages/Loginpage";
import { Homepage } from "./pages/homepage";
import { addemployee } from "./pages/addemployee";
import { getrandomemploueedetails } from "./testdata/randomdata";

test.only("test add employee func", async ({ page,loginpage, homepage, addemppage }) => {

    
    await loginpage.visit();
    await loginpage.loginuser();
    await loginpage.pageTitle();

    await expect(page.getByRole("link", { name: "PIM" })).toBeVisible();
    

      await homepage.addhomepagedetails();


     await addemppage.addemployeee(getrandomemploueedetails());
     await expect(addemppage.gettestmsg).toHaveText("Successfully Saved");
     console.log("verified")
     





})