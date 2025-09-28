
function getAge()
{
    console.log("My age is 36");  
}

const getName = ()=>
    {
console.log("Line 1");
console.log("Line 2");
console.log("Line 4");
}

//getAge()
//getName()


function getCustomerDetails(name,callback)
{
    console.log("Customer name is "+name );

    callback();
}

function customerAge()
{
    console.log("Customer age is 80");
    
}

getCustomerDetails("Bala", customerAge)

getCustomerDetails("murugan", ()=>{console.log("is QA");
})

