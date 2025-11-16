import {test, expect} from "@playwright/test"

test("Sort Funtionality", async({page}) =>{

await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")

const rows = page.locator("//table[@id='webtable']/tbody/tr")
const rowSize = await rows.count()
const actualList = []
const actualListSorted = []
for(let i = 0; i< rowSize; i++)
{
    const j = i+1;
    const ele = page.locator("//table[@id='webtable']/tbody/tr["+j+"]/td[1]")
    let data =await ele.textContent();
    actualList.push(data);
}

console.log("Before Sorting -->",actualList);

actualList.sort();
console.log("After Sorting programmatically -->", actualList);

await page.locator("//button[contains(text(),'Sort by ID')]").click()

for(let i = 0; i< rowSize; i++)
{
    const j = i+1;
    const ele = page.locator("//table[@id='webtable']/tbody/tr["+j+"]/td[1]")
    let data =await ele.textContent();
    actualListSorted.push(data);
}
actualListSorted.push("bala");
console.log("actualListSorted -->", actualListSorted);

expect(actualListSorted).toStrictEqual(act
    ualList)


await page.waitForTimeout(10000)
})