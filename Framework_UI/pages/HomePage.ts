import { Locator, Page } from "@playwright/test";
import {PlaywrightBaseClass} from "../utills/PlaywrightGenerics"

export class HomePage extends PlaywrightBaseClass
{

    readonly HomePageText : Locator

    constructor(page : Page)
    {
        super(page)
        this.HomePageText = page.locator("//h2[contains(@class, 'ProductManagement_heading__')]")
    }

    async verifyHomePageText()
    {
       //let actualText = await this.HomePageText.textContent();
       return this.getElementText(this.HomePageText)
    }


}