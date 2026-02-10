const score = 400
console.log(score);

const balance = new Number(125)
console.log(balance);

// in dono ke output ka diff bhot imp hai 
// 400
// [Number: 125]


// number methods -

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // ye jo hai isme jo value aap doge utni precision value upar hojati 

const numOne = 123.78 
console.log(numOne.toPrecision(3));
// precision ka mtlb utni value rahegi sirf decimal se pehle 
console.log(numOne.toPrecision(2));
console.log(numOne.toPrecision(5));
// used in e-com websites for payment 


const hundreds = 23000000000
console.log(hundreds.toLocaleString('en-IN'));
// kisi bhi country ke acc commas ka system 

//++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4)); // - ko + mai change krta hai 

console.log(Math.round(13.4)); // round off 

console.log(Math.max(4,6,9,12));
console.log(Math.min(7,8,3,0,12));

// imp - 

console.log(Math.random()); // ye humesha 0 se 1 mai hi value deta hai 
console.log(Math.random()*10);
console.log((Math.random()*10) + 1 );

// expl - dekho 10 se multiply krenge toh value 1 se badi ho jayegi to maths.random nhi de sakta isliye hum + 1 krte hai 

  // ab iske liye ek formula hai - 

  const min = 10 
  const max = 23 

  console.log(Math.floor(Math.random()*(max - min + 1)) + min); // VERY IMP 
  









