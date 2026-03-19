function addTwoNumbers (num1 , num2){
    result = num1 + num2
    return result 
    // iske baad kuch ni print hoga 
}

addTwoNumbers(3,4)
console.log("Result:" , result); 

function userLoggedIn (username){
    if(!username){
        console.log('Please enter your shit');

        
    } else 
    return `${username} just gooned!`
}

console.log(userLoggedIn("Tejal"))


function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
