// array

const myArr = [0, 1, 2, 3, 4, 5]
const myColors = ["Black", "Blue"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods 

// myArr.push(6)     // add thaii
// myArr.push(7)
// myArr.pop()      // last value remove krse

// myArr.unshift(9)    // start value add thaii
// myArr.shift()       // start value remove thaii

// console.log(myArr.includes(9));    // value true false batave che ke naii
// console.log(myArr.indexOf(3));     // value kya index pr che te 

// const newArr = myArr.join()     // string ma convert kree

// console.log(myArr);
// console.log(newArr);


// Slice , Splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)    // return value in section 1 to 3 index thata hoii e
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1, 3)  
console.log("C", myArr);     // slice option nikli gyo atle atle khali 0 4 5 thse = differnt slice/splice
console.log(myn2);
