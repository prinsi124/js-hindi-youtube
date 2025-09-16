const user  = {
    username: "Prinsi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);            // cuurent context refr krna he tab this.jobhi name he wo krna he
        console.log(this);

    }                                                                    // this fun cuurent context ko refr krta he
} 

// user.welcomeMessage()
// user.username = "sam"     // context value change krava
// user.welcomeMessage()

// console.log(this);                     // browser ke under he wo he window object global



// function chai () {
//      let username = "Prinsi"
//      console.log(this.username);            // this.jo value he wo sirf object me kam krta he fun me nahii
// }

// chai()


// const chai = function() {
//     let username = "Prinsi"
//     console.log(this.username);     // not 
// }


const chai = () => {           // arrow fun
    let username = "Prinsi"
    console.log(this);     // not 
}

// chai()


// const addTwo = (num1, num2) => {            // basic arrow fun defined
//     return num1 + num2
// }  

// const addTwo = (num1, num2) =>  num1 + num2         // implicit  return

// const addTwo = (num1, num2) =>  (num1 + num2)                     // {}hoi to return lakhvanu and ()to nai lakhvanu

//object return krna he to 

const addTwo = (num1, num2) =>  ({username: "prinsi"}) 

console.log(addTwo(3, 10));


// const myArray = [2, 3, 5, 10]

// myArray.forEach()