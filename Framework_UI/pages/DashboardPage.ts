import { Locator, Page } from "playwright/test";

export class DashbordPage
{
 // POM 
 //1. Locate Element 
    productManagementLinkEle: Locator

    constructor(page: Page)
    {
      this.productManagementLinkEle = page.locator("//h4[text()='Product Management']")
    }
//2. Crete page methods
    async clickProductMangementLink()
    {
        await this.productManagementLinkEle.click()
        
    }
}