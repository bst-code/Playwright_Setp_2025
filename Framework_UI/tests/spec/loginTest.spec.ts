import {test, expect} from "@playwright/test"
import { DashbordPage} from "../../pages/DashboardPage"
import { PageManager } from "../../pages/PageManager"
import {TC_001,TC_002} from "../TestData/Data.json"


test.beforeEach("Before Each", async ({page})=>{
    await page.goto("/")
})

test.afterEach("After Each", async ({page})=>{
    await page.screenshot(
        {
            path:"./screenshot/test.png"
        })
})

test.only("Login With Valid Details", async({page})=>
{
    
   let pageManger = new PageManager(page)
   await  pageManger.getDashboardPage().clickProductMangementLink()
   await pageManger.getLoginPage().loginToApp(TC_001.username, TC_001.password)
   let actualData = await  pageManger.getHomePage().verifyHomePageText()
   expect.soft(actualData).toContain(TC_001.expectedText)
   await page.waitForTimeout(5000)

})

test("Login With Invalid UserName only", async({page})=>
{
    let dashbordPageObj = new DashbordPage(page)
    await dashbordPageObj.clickProductMangementLink()
    await page.waitForTimeout(5000)

})

test("Login With Invalid password only", async({page})=>
{
    let dashbordPageObj = new DashbordPage(page)
    await dashbordPageObj.clickProductMangementLink()
    await page.waitForTimeout(5000)

})