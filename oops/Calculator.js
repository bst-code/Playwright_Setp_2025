

class Calculator
{

no1 = 20;
no2 = 40;

add(i,j)
{
 var total = i +j;
 console.log(total);
 
}

// add()
// {
//  var total = this.no1+this.no2;
//  console.log(total);
 
// }

static sub(i,j)
{
 var total = i -j;
 console.log(total);
 
}
}

let obj = new Calculator()
obj.add()
obj.add(1,2)
Calculator.sub(30,99)
obj.add(30,50)
console.log(obj.no1);
console.log(obj.no2);

