import {test,chromium, webkit, firefox} from "@playwright/test";


test("Take screenshot", async ()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle")

    await page.screenshot({path:"./screenshot/test.png"})

    const ele = page.locator("#bst_btn5")
    await ele.screenshot({path:"./screenshot/test_ele.png"})
    })