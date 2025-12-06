import { Parent } from "./parent.js"

export class Child extends Parent
{

    childAge = 36;
    
    childProperty()
    {
        console.log("Child owns Flat");
        
    }
}

// let obj = new Child()
// obj.childProperty()
// obj.parentProperty()