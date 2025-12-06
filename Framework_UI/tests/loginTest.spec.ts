import {test, expect} from "@playwright/test"
import { DashbordPage } from "../pages/DashboardPage"

test.beforeEach("Before Each", async ({page})=>{
    await page.goto("/")
})

test.afterEach("After Each", async ({page})=>{
    await page.screenshot(
        {
            path:"./screenshot/test.png"
        })
})

test("Login With Empty Details", async({page})=>
{
    let dashbordPageObj = new DashbordPage(page)
    await dashbordPageObj.clickProductMangementLink()
    //await page.locator("//h4[text()='Product Management']").click()
    
    await page.waitForTimeout(5000)

})

test("Login With Invalid UserName only", async({page})=>
{
    let dashbordPageObj = new DashbordPage(page)
    await dashbordPageObj.clickProductMangementLink()
    //await page.locator("//h4[text()='Product Management']").click()
    await page.waitForTimeout(5000)

})

test("Login With Invalid password only", async({page})=>
{
    let dashbordPageObj = new DashbordPage(page)
    await dashbordPageObj.clickProductMangementLink()
    //await page.locator("//h4[text()='Product Management']").click()
    await page.waitForTimeout(5000)

})