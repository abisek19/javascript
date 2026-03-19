// global scope 
let a = 100 
var b = 200 

// block scope 
if (true) {
    let a = 19
    var b = 2
    console.log(a);
    
    
}
console.log(a);
console.log(b);

// IMP CONCEPT 

addTwo(5) // ye error nhid dega 

function addTwo(num) {
    return num + 1
    
}

addTwo(5) // ye error dega 

const addTwo = function (num){
    return num + 1
}
