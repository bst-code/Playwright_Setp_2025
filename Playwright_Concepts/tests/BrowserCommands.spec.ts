import {test} from "@playwright/test";

//test("Open browser", async function (){

    // Step 1 - await open browser
    // Step 2 - await get title
    // step 3 - await fill form
    // step 4 - await close browser 

//})

test("Open browser from context", async({browser})=>{

    // Step 1 - await open browser

    const context =  await  browser.newContext();
    const page = await context.newPage()
    await page.goto("https://bsparksoftwaretechnologies.com/")

   await page.close()

})


test("Open browser with page fixture", async({page})=>{

    // Step 1 - await open browser
    await page.goto("https://bsparksoftwaretechnologies.com/")

    await page.close()

})