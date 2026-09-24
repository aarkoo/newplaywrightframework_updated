

import { test as base } from "@playwright/test";
import { Loginpage } from "../pages/Loginpage";
import { Homepage } from "../pages/homepage";
import { addemployee } from "../pages/addemployee";

type pages = {
    loginpage: Loginpage;
    homepage :Homepage;
    addemppage : addemployee;
};

export const test = base.extend<pages>({
    loginpage: async ({ page }, use) => {
        await use(new Loginpage(page));
    }
    ,


   homepage: async ({ page }, use) => {
        await use(new Homepage(page));
    }
    ,

    addemppage: async ({ page }, use) => {
        await use(new addemployee(page));
    }


});