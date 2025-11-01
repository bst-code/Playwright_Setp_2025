
let studnets = new Set();
studnets.add("Bala")
studnets.add("Karthik")
studnets.add("murali")
studnets.add("Bala")
studnets.add(20)
studnets.add(true)


console.log(studnets);
console.log(studnets.has("murali"));
studnets.delete("Bala")
console.log(studnets);
console.log(studnets.size);

for(const data of studnets){
    console.log(data);
    
}

studnets.clear()

console.log(studnets);

