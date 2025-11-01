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

test.only("Frame Concept test 1", async({page}) =>{

await page.goto("https://playground.bsparksoftwaretechnologies.com/frames")
await page.frameLocator("//iframe[@id='bst_frame2']")
          .frameLocator("//iframe[@id='bst_frame3']")
          .locator('#nameInput')
          .fill("Balamurugan")
await page.waitForTimeout(3000)

//multiple frame handled via page.frames() - it wont be used much in real scenarios
const allFrames = page.frames()
for(const fr of allFrames)
{
    fr.locator("#id").fill("Bala")
}

})
