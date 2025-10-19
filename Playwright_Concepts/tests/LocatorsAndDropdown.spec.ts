import {test,expect} from "@playwright/test";


test("Learn xpath Locators",async ({page})=>{


   await page.goto("https://playground.bsparksoftwaretechnologies.com/validate")
  // const genderEle = page.locator("//input[@name='gender']").first()
 //  const genderEle = page.locator("//input[@name='gender']").last()
   //const genderEle = page.locator("//input[@name='gender']").nth(1)
   const genderEle = page.locator("//input[@name='gender' and @value='-1']")
   genderEle.scrollIntoViewIfNeeded()
   await genderEle.click()

   const dropdownEle = page.locator("//label[text()='Select your pronoun']/following-sibling::select")
   //dropdownEle.selectOption({index: 3})
  // dropdownEle.selectOption({value : "2"})
  await dropdownEle.selectOption({label :'She: "Wish her a happy birthday!"'})
  await page.waitForTimeout(3000)
})

