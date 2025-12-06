import { Dog } from "./Dog.js";

class Cow extends Dog{

    sound()
    {
        console.log("Cow says mo moooo");
        
    }
}

let obj = new Dog()
obj.sound()