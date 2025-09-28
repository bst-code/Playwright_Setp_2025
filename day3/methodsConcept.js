

function add()
{
let i = 10 //hard code
let j = 20
let sum = i +j
console.log(sum);
}

function addTwoNumber(i,j)
{
let sum = i +j
console.log(sum);
}

function addTwoNumberWithDefaultValue(i=90,j=90)
{
let sum = i +j
console.log(sum);
}

function getMoney()
{
    let balance = 30000;
    console.log("My account Balance is ",balance);
    return balance
}

const sub = (name, age)=>
    {
        console.log("Iam arrow function", name ," and ", age);
        
    }

add()
addTwoNumber(2,4)
addTwoNumber("Bala", "murugan")
addTwoNumberWithDefaultValue(10)
const i =  getMoney()
console.log(i);

sub("Bala", 36)

addTwoNumber()


// Create a new Date object, which represents the current date and time
const currentDate = new Date();

// Get the full year (four digits) from the Date object
const currentYear = currentDate.getFullYear();

// Display the current year
console.log(currentYear);