import {test,chromium, webkit, firefox} from "@playwright/test";

test("Multiple pages testcase",async ()=>{


   const browser =  await firefox.launch({headless:false})
   const context =  await  browser.newContext();
   const page1 = await context.newPage()
   await page1.goto("https://playground.bsparksoftwaretechnologies.com/")

    const page2 = await context.newPage()
    await page2.goto("https://playground.bsparksoftwaretechnologies.com/login")

    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    
    console.log("Total page opened",context.pages().length);
    
})

test.only("Handle Child window", async({browser})=>{

    const context =  await  browser.newContext();
    const page = await context.newPage()

    await page.goto("https://playground.bsparksoftwaretechnologies.com/windowhandle")
    const button = page.locator("#bst_btn4")

    const pageEvent =  context.waitForEvent("page")
    await button.click()

    const childPage= await pageEvent
    console.log("Child Page Url",childPage.url());
    console.log("parent page", page.url());
})