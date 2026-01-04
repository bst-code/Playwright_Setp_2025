import { expect} from "@playwright/test"
import {test} from "../../test-options"
import { DashbordPage} from "../../pages/DashboardPage"
import { PageManager } from "../../pages/PageManager"
import {TC_001,TC_002} from "../TestData/Data.json"


test.beforeEach("Before Each", async ({page, GMAIL_URL})=>{
    console.log(GMAIL_URL);

    console.log(process.env.ENV);
    console.log(process.env.DB_USER_NAME);
    console.log(process.env.DB_PASSWORD);
    await page.goto("/")
})

test.afterEach("After Each", async ({page})=>{
    await page.screenshot(
        {
            path:"./screenshot/test.png"
        })
})

test.only("Login With Valid Details", async({page}, testInfo)=>
{
    
   let pageManger = new PageManager(page)

     console.log(testInfo.project.name);
    console.log(testInfo.status);
    console.log(testInfo.retry);
    console.log(testInfo.title);
  
    let dashbordPageObj = new DashbordPage(page)

    if(testInfo.retry === 1)
    {
        dashbordPageObj.getFullPageScreenshot(page,testInfo)
    }

   await  pageManger.getDashboardPage().clickProductMangementLink()
   await pageManger.getLoginPage().loginToApp("admin@test.com","test123")
   let actualData = await  pageManger.getHomePage().verifyHomePageText()
   expect.soft(actualData).toContain(TC_001.expectedText)
   await page.waitForTimeout(5000)

})

test("Login With Invalid UserName only", async({page}, testInfo)=>
{

    //await dashbordPageObj.clickProductMangementLink()
    await page.waitForTimeout(5000)

})

test("Login With Invalid password only", async({page})=>
{
    let dashbordPageObj = new DashbordPage(page)
    await dashbordPageObj.clickProductMangementLink()
    await page.waitForTimeout(5000)

})