import {test,expect} from "@playwright/test";


test("Get All Option from Dropdown",async ({page})=>{

await page.goto("https://playground.bsparksoftwaretechnologies.com/dropdown")

const ele = page.locator("#bst_select1")
await ele.selectOption({index: 4})

//const optionElements = page.locator("//select[@id ='bst_select1']/option")
const optionElements = await page.$$("//select[@id ='bst_select1']/option")

for(let option of optionElements)
{
    console.log(await option.textContent());
}

await page.waitForTimeout(3000)
})