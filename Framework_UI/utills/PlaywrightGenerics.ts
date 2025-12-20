import { Locator, Page } from "@playwright/test";

export class PlaywrightBaseClass
{

readonly page : Page

constructor(p:Page)
{
    this.page = p
}

async enterText(element: Locator, textToEnter: string)
{
    element.fill(textToEnter)
}

async clearText(element: Locator)
{
    element.clear()
}

async clickElement(element: Locator)
{
    element.click()
}

async getElementText(element: Locator)
{
   let data = element.textContent()
   return data
}

async getElementAttribute(element: Locator, attributeName: string)
{
  let data =  element.getAttribute(attributeName)
  return data
}


}