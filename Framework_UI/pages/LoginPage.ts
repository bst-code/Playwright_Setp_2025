import { Locator, Page } from "@playwright/test";
import {PlaywrightBaseClass} from "../utills/PlaywrightGenerics"

export class LoginPage extends PlaywrightBaseClass
{
    readonly UserNameEle : Locator
    readonly PasswordEle : Locator
    readonly LoginEle : Locator
    readonly ErrorMsg:    Locator

    constructor(page: Page)
    {
        super(page)
        this.UserNameEle = page.locator("#userName")
        this.PasswordEle = page.locator("#passWord")
        this.LoginEle    = page.locator("//button[text()='Login']")
        this.ErrorMsg    = page.locator("//p[@class='error']")
    }

    async loginToApp(username: string, pwd: string)
    {
      await this.enterText(this.UserNameEle, username)
      await this.enterText(this.PasswordEle, pwd)
      await this.clickElement(this.LoginEle)
    }

    async verifyErrorMessage()
    {
       return this.getElementText(this.ErrorMsg);
    }

    
}