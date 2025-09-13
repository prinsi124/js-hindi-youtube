// functions atle 10.. line code he aene ak package krvu

function sayMyName() { 
    console.log("P");
    console.log("r");
    console.log("i");
    console.log("n");
    console.log("s");
    console.log("i");
}

// sayMyName()        // saymyname = refrence  saymyname() = execution   

// function addTwoNumbers (number1 , number2) {        //  (number1 , number2)= parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers (number1 , number2) {   

    // let result = number1 + number2           // return pchi ni value access naii kre 
    // return result  
     return number1 + number2        // return ko variable me store kr shakte he sirf console me nhi
}

// addTwoNumbers(3 , 10)         // (3+10) = arguments or value pass 
// addTwoNumbers(3 , "4")
// addTwoNumbers(3 , "a")
const result = addTwoNumbers(3 , 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam") {        // default value 
    // if(username === undefined) {                 // if ma check krava value che ke nai                    
    //      console.log("Please enter a username");
    //      return

    if(!username) {                 // if ma check krava value che ke nai                    
         console.log("Please enter a username");
         return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Prinsi"));
// console.log(loginUserMessage("Prinsi"));   // koi pass no kravi hoi to undefined hota he = interview mate



// shoppimg cart ma add karva mate parameters e commerce website ma 

function calculateCartPrice (val1, val2, ...num1) {    // fun ma multiple value pass krva mate ... restof operator use 
     return num1
}

// console.log(calculateCartPrice(300, 400 ,500, 600));


// objects fun 

const user = {
    username: "prinsi",
    price: 199
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


// array fun 

const myNewArray = [100, 200, 300, 400]

function returnSecondValue (getArray) {
    return getArray [1]
}

// console.log(returnSecondValue(myNewArray));       // retuen value mate avi rite lakhavu
console.log(returnSecondValue([200, 400, 500, 100]));  
