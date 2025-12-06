class Calculator
{
    age : number = 30
    firstName: string = "Bala"
    lastName: string ="Murugan"

    add()
    {
       console.log("Iam add method");
       
    }

    getFullName():string
    {
        return this.firstName + this.lastName
    }
}

let obj = new Calculator()
let myName = obj.getFullName()
console.log("my name is ",myName);
