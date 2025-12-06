import { Child } from "./child.js";

class GrandChild extends Child
{

    grandChildProp()
    {
        console.log("Grand Child owns - Toy Car");
        
    }
}

let obj = new GrandChild()
obj.grandChildProp()
obj.childProperty()
obj.parentProperty()