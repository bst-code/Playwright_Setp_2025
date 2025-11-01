import {test, expect} from "@playwright/test"

test("Frame Concept test", async({page}) =>{

await page.goto("https://playground.bsparksoftwaretechnologies.com/frames")

const frameEle = page.frameLocator("//iframe[@id='bst_frame1']")

const inputbox = frameEle.getByPlaceholder("Type your name here")
await inputbox.fill("Bala")
await page.waitForTimeout(3000)

const dropDownLink = page.locator("//span[text()='DROPDOWN']")
await dropDownLink.click()
await page.waitForTimeout(3000)
const title = await page.title()
console.log(title);

expect(title).toBe("Bala")

})
