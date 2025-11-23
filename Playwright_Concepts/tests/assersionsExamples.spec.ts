import {expect, test} from "@playwright/test";

test("Assert", async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/send_keys")
    const ele = page.locator("#disabled")
    expect(await ele.isVisible()).toBeTruthy()
    await expect(ele).toBeEnabled()

    expect("bala").toBe("murugan")
})

test.only("Soft Assert ",async({page})=>{

    await page.goto("https://playground.bsparksoftwaretechnologies.com/send_keys")

    const ele = page.locator("#email")

    //expect(await ele.getAttribute("placeholder")).toBe("bala@xxxxx.com")
    expect.soft(await ele.getAttribute("placeholder")).toBe("xxxxx@xxxxx.com")

    await ele.scrollIntoViewIfNeeded()
    await ele.fill("Bala")

    await page.waitForTimeout(3000)

})