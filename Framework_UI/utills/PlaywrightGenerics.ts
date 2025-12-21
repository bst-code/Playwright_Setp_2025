import { Locator, Page, TestInfo } from "@playwright/test";

export class PlaywrightBaseClass
{

readonly page : Page

constructor(p:Page)
{
    this.page = p
}

async enterText(element: Locator, textToEnter: string)
{
    await element.fill(textToEnter)
    //element.pressSequentially(textToEnter,{delay:120})
   
}

async clearText(element: Locator)
{
   await element.clear()
}

async clickElement(element: Locator)
{
   await element.click()
}

async getElementText(element: Locator)
{
   let data = await element.textContent()
   return data
}

async getElementAttribute(element: Locator, attributeName: string)
{
  let data = await element.getAttribute(attributeName)
  return data
}

async getFullPageScreenshot(page: Page, testInfo : TestInfo)
{
    await testInfo.attach("Taking Screenshot on first Retry", {
        body: await page.screenshot(),
        contentType: "image/png"

    })
}

}