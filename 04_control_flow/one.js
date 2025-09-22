// pura code execute nahi hona chaiye conditional base pr hoga chaiye logic pr 

// if

// if (true) {                // true he to code execute hoga false me nahi hoga 

// }

const isUserLoggedIn = true          // ae = assign kiya he oper
const temperature = 41 

// if( temperature === 40 ) {              // condition comparison 
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }

// console.log("execute")

// comparison ke opeeator = <, >, <=, >=, ==: check krne ke liye, !=, ===: type check kre, != 


// scope releated hee imp 

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


//  shorthand notation

// const balance = 1000

// if ( balance > 500 ) console.log("test"), console.log("test2");     // , nahi kra na he             // implicit scope

// multiple condition hoi tyre nesting 

// if (balance < 500) {
//     console.log("less than 500");
// }  else if (balance < 750) {
//     console.log("less than 750");
// }  else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// } 



// account online 

const userLoggedIn = true
const debitCard = true 
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {                  // && =and oper 2 condition ne check krva && bathi value true avi joi
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || LoggedInFromEmail) {            // || =or oper multiple use mate (logical oper) || ak condition true avi joi 
    console.log("user logged in");
}