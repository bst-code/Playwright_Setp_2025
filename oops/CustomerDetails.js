class CustomerDetails
{
 name = "Bala"

    constructor(fullname)
    {
        this.name = fullname
    }

   

getCustomerName()
{
    console.log("Welcome ", this.name);
    
}


}

let obj = new CustomerDetails("Murugan Bspark")
obj.getCustomerName()