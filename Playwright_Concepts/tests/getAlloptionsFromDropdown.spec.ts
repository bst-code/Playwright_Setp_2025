import {test,expect} from "@playwright/test";


test("Get All Option from Dropdown",async ({page})=>{

await page.goto("https://playground.bsparksoftwaretechnologies.com/dropdown")

const ele = page.locator("#bst_select1")
await ele.selectOption({index: 4})

const optionElements = page.locator("//select[@id ='bst_select1']/option")

console.log("Bala ------>",await page.locator("#bst_select1").inputValue());
//console.log("Bala --> ",await page.locator("//select[@id ='bst_select1']").text);

//const optionElements = await page.$$("//select[@id ='bst_select1']/option")

//for(let option of optionElements)
for(let i =0; i < await optionElements.count();i++)
{
    console.log(await optionElements.nth(i).textContent());
}

await page.waitForTimeout(3000)
})