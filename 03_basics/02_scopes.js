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
