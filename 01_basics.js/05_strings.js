const name = "Abisek."
const repoCount = 10 

 console.log(name + repoCount + " chuttad") // not reccomended 

// string interplotation -

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// we can define the string in other way like by creating the object

const newName = new String('Abisek.')

// This will also do the same thing as we doing previously actiually behind the scenes above method dpo this thing
// now when we put this string defination in the console and then print it we get below thing which says the key value pair
/*
0:"R"
1:"u"
2:"s"
3:"h"
4:"i"
length:5
*/
// And we also have something called the Prototype below that as well
// Prototype are the basically the methods which we use like to upper and all

console.log(newName[1])
console.log(newName.__proto__)
// these are prototypes that carries function like upper case and all

console.log(newName.length)
console.log(newName.toUpperCase())

console.log(newName.charAt(3))
console.log(newName.indexOf('i'))

const newString = newName.substring(0,4)
console.log(newString)

// isme 4th element print ni hoga and also ye negative values ko ignore karega like (-8,4) karoge toh ye use (0,4) hi manega 

const anotherString = newName.slice (-8,4)
console.log(anotherString)

const newStringOne = "    abisek   "
// kabhi kabhi ye hume dekhne ko milta hai jab user input mai user bhot sare gaps chrde jo hume nhi chahiye 
// iske liye hum ye use krte hai -

console.log(newStringOne)
console.log(newStringOne.trim())