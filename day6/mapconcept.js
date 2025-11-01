// MAP --> Data store --> Key = value (key value pair)

let customerDetails = new Map()
customerDetails.set("Name","Bala")
customerDetails.set("Age", 33)
customerDetails.set("Lcation", "Chennai")
customerDetails.set("Mobile",null);

console.log(customerDetails);
console.log("Customer age is ",customerDetails.get("Age"))
//customerDetails.clear()
console.log(customerDetails.keys());
console.log(customerDetails.values());
console.log(customerDetails.size);

customerDetails.delete("Mobile")

console.log(customerDetails);
