

import { expect, Locator, Page } from "@playwright/test";
import { Employeedetails } from "../testdata/dataInterface";

export class addemployee
{


   readonly page: Page;
   readonly firstname: Locator;
   readonly lastname :Locator;
   readonly employeeid : Locator
   readonly save  :Locator
   readonly savemsg : Locator

    

     constructor(page:Page)
     {
        this.page=page;
        this.firstname= page.getByRole('textbox', { name: 'First Name' });
        this.lastname = page.getByRole('textbox', { name: 'Last Name' });
        this.employeeid = page.getByRole('textbox').nth(4);
        this.save       = page.getByRole('button', { name: 'Save' });
        this.savemsg = page.getByText("Successfully Saved");

     }


     async addemployeee(employeedetails : Employeedetails)
     {
         await this.firstname.click();
         await this.firstname.fill(employeedetails.firstname)
         await this.lastname.click()
         await this.lastname.fill(employeedetails.lastname)
         await this.employeeid.click();
         await this.employeeid.fill(employeedetails.employeeid)
         await this.save.click();
       //  await this.page.waitForTimeout(3000);
     }

     public get gettestmsg()
     {
        return this.savemsg;
     }
}
