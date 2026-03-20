import { Given, When, Then } from "@cucumber/cucumber"
import { CustomWorld } from "../utils/world";
Given('I login to Product login page',async function(this:CustomWorld)  {
    
    await this.page.goto("https://playground.bsparksoftwaretechnologies.com/")
    console.log("Application opened");
    
});


When('I enter userName as {string} and password as {string}', async (userName, Password)=> {
    
    console.log("UserName entered as ", userName);
    console.log("Password entered as ", Password);
    
});

Then('I Validate error message', async () =>{
  
    console.log("Error message validated ");
    
});