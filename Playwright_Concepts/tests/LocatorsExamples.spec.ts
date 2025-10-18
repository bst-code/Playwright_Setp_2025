import {test,expect} from "@playwright/test";


test("Locate Elements", async ({page})=>{


    await page.goto("https://playground.bsparksoftwaretechnologies.com/send_keys")

    //const EmailEle = page.locator("id=email")
    const EmailEle = page.locator("#email")
    await EmailEle.fill("Bala@bspark.com")
    //await page.waitForTimeout(3000)
    await EmailEle.clear()
   // await page.waitForTimeout(3000)
    await EmailEle.fill("John@bspark.com")
   // await page.waitForTimeout(3000)

    // Xpath 

    const defaultTextEle = page.locator("xpath=//input[@name='bst_default']")
    const actualText = await defaultTextEle.getAttribute("value")
    console.log(actualText);

    //disabled or not
    const inputBoxEle = page.locator("id=disabled")
    inputBoxEle.fill("Chennai")
    console.log(await inputBoxEle.isEnabled())
    console.log(await inputBoxEle.isVisible());

   await page.goto("https://playground.bsparksoftwaretechnologies.com/buttons")
   await page.waitForTimeout(3000)
   const homePageButtonEle = page.locator("text=GO TO HOME PAGE")
   console.log(await homePageButtonEle.textContent());
   await homePageButtonEle.click()
   await page.waitForTimeout(3000)


})