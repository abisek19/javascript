// array 

const myArr = [23 , 45 , 67 , 89 ]
const myCric = ['Abhishek' , 'Sanju']

const myArr2 = new Array(12 , 25 , 69 , 79)

console.log(myArr[2])
console.log(myCric[1])
console.log(myArr2[0])


// array methods 

myArr.push(41) // adds at the end 
console.log(myArr)

myArr.pop()    // removes from the end 
console.log(myArr)

myArr.unshift(17) // adds at the start 
console.log(myArr)

myArr.shift()     // removes from the start 
console.log(myArr)


// VERY IMP FOR JS INTERVIEWS -

//SLICE AND SPLICE 

console.log('A', myArr)

const new1 = myArr.slice(1,3)
console.log(new1)

console.log('B' , myArr)
const new2 = myArr.splice(1,3)
console.log(new2)

console.log('C' , myArr)  // slice orignal array mai koi change nhi krta but splice orignal array ko change kr deta hai 

