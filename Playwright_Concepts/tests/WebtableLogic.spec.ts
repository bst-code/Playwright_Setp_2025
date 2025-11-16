import {test, expect} from "@playwright/test"

test("Webtable - get all data", async({page}) =>{

await page.goto("https://playground.bsparksoftwaretechnologies.com/webtable")

const table = page.locator("//table[@id='webtable']/tbody");
const rows = table.locator("tr")

for(let i = 0; i< await rows.count(); i++)
{
    let size = i +1;
    const isActive = page.locator("(//input[@name='active'])["+size+"]")
    const cells = rows.nth(i).locator("td")
    for(let j = 0; j< await cells.count(); j++)
    {
        const data = await cells.nth(j).textContent();
        console.log(data);
        if(data == "ADMIN" || data == "HR")
            {
                isActive.click()
            }
    }
}
//console.log(await rows.allInnerTexts());

await page.waitForTimeout(10000)
})

//  //table[@id='webtable']/tbody/tr[1]/td[1]
// Get the ID and verify if sorting is working as expected

// Before Sorting - get the UI data [101,103,102,104,106,105]

//expectedList ---> [101,102,103,104,105,106]  // actualList [101,102,103,104,105,106]