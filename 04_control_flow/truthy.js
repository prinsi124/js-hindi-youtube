// truthy or falsy ka value kese ata hee woo

const userEmail = []                  // "" empty srting he to false or [] empty he to true hee

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't  have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NoN=not a number

// truthy values

// "0", 'false'=interview, " ", [], {}, function(){}

// array ko check kre
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


//object hote tab kese check kre 
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??) : null, undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);



// Terniary Operator 

// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




// imp interview 

// false == 0 
// true
// false == ''
// true
// 0 == ''
// true