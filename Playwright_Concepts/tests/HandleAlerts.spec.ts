import {test,expect} from "@playwright/test";

test("Alert concept", async ({page})=>{


     page.on("dialog", async (dialog)=>
        {
            const data = dialog.message()
            if(data === "PRESS A BUTTON!")
            {
                await page.waitForTimeout(3000)
                dialog.accept()
            }
            else if(data === "PLEASE ENTER YOUR NAME")
                {
                    await page.waitForTimeout(3000)
                    dialog.accept("Balamurugan")
                }
            else
                {
                    dialog.dismiss()
                }
        })


    await page.goto("https://playground.bsparksoftwaretechnologies.com/alert")

    const button = page.locator("#bst_alert2")
    const button1 = page.locator("#bst_alert3")

    await button.click()

    await page.waitForTimeout(5000)

    await button1.click()
    await page.waitForTimeout(5000)
})