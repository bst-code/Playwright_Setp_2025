let city = "Balamurugan"

console.log(city)
console.log(city.toUpperCase())
console.log(city.toLowerCase())

console.log(city.length)

console.log(city.slice(4,10))

console.log(city.charAt(4))

let name = "My name is Bala"
console.log(name.split(" "))

console.log(name.split(" ")[2])

let ages = "23,25,26,66,88,99,100"
console.log(ages.split(",")[4])


let subject = "Social Science"
console.log(subject.includes("scoial"))

console.log(subject.concat(" maths"))

console.log(subject.startsWith("Soc"))
console.log(subject.endsWith("Science"))

let address = "    54 civil aviation colony       "
console.log(address.trim())

console.log(address.trimEnd())
console.log(address.trimStart())

let street = "3rd street "

console.log(street.repeat(3))

let sub = "I love JAVA and Python and JAVA, JAVA"
console.log(sub.replace("JAVA", "JS"))
console.log(sub.replaceAll("JAVA", "JS"))


let count = 20;
console.log(typeof count)

count = count.toString()
console.log(typeof count)

let mobile = "988"
console.log(typeof mobile)
console.log(mobile + 1)

mobile = parseInt(mobile)

console.log(typeof mobile)
console.log(mobile + 1)

