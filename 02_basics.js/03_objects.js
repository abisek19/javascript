// object literals 

const mysym = Symbol("key1")

const myobj = {
    name : "Abisek",
    age: 18 ,
   //mysym] : mykey1 ,
    email: "abhishek@google.com" ,
    isLoggedIn: false ,
    lastLoggedIn: ['Monday','sunday'] ,
    "mother name": 'Aparajita'
}

console.log(myobj.age)
console.log(myobj["mother name"]) // isme aap direct . se nhi print kara sakte value 
// ole.log(myobj[mysym])
// symbol wali cheez imp hai 


// freeze - is se aapke obj mai change hona bnd hojayega 

myobj.email = "nankidevi@gmail.com "
console.log(myobj.email)
// Object.freeze(myobj)
myobj.email = "bhanuparatp@gmail.com"
console.log(myobj.email)

// ab freeze ko commeent out krdo taaki chaanges kr sako 

myobj.greeting = function (){
    console.log("chudlundi")
}

myobj.greetingTwo = function(){
    console.log('Hello , $(this.name) is chudlundi ')
}

console.log(myobj.greeting())
console.log(myobj.greetingTwo())