import { Locator, Page } from "playwright/test";
import {PlaywrightBaseClass} from "../utills/PlaywrightGenerics"

export class DashbordPage extends PlaywrightBaseClass
{
 // POM 
 //1. Locate Element 
    productManagementLinkEle: Locator

    constructor(page: Page)
    {
      super(page)
      this.productManagementLinkEle = page.locator("//h4[text()='Product Management']")
    }
//2. Crete page methods
    async clickProductMangementLink()
    {
        //await this.productManagementLinkEle.click()
        await this.clickElement(this.productManagementLinkEle)
        
    }
}