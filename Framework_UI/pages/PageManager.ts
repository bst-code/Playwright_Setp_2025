import {Page, Locator} from "@playwright/test"
import { HomePage } from "./HomePage"
import { DashbordPage } from "./DashboardPage"
import { LoginPage } from "./LoginPage"

export class PageManager
{

    readonly page : Page
    readonly homePage : HomePage
    readonly dashboadPage : DashbordPage
    readonly loginPage: LoginPage

    constructor(page : Page)
    {
        this.page = page
        this.dashboadPage = new DashbordPage(page)
        this.homePage = new HomePage(page)
        this.loginPage = new LoginPage(page)
    }

    getHomePage()
    {
        return this.homePage
    }

    getDashboardPage()
    {
        return this.dashboadPage
    }

    getLoginPage()
    {
        return this.loginPage
    }
}