import {test, request, expect} from "@playwright/test"

test("Get user API", async({request})=>{


    const res = await request.get("https://api.bsparksoftwaretechnologies.com/api/users")

    console.log(res.status());
    console.log(res.statusText());

    expect(res.status()).toBe(200);

    const resBody = await res.json()
    console.log(resBody);
   // expect(resBody).toContain("Successfully fetched all user records.")

    console.log(await resBody.message);

    const size = await resBody.users.length;
    console.log(size);

    for(let i =0; i<size; i++)
    {
    console.log(await resBody.users[i].email);
    }
})


test("Create new user via API", async({request})=>
    {
        const res = await request.post("https://api.bsparksoftwaretechnologies.com/api/users",{
            data:{
  "name": "sathiyan",
  "email": "sathiyan@bspark.com",
  "number": "5469474979"
               }
        })

        console.log(await res.status());
        console.log(await res.json());
        
        
    })


    test.only("Broken link test", async({request})=>
        {
            const res = await request.get("https://httpstat.us/404")
            console.log( res.status());
            

        })