// for each loop

const coding = ["java", "python", "ruby", "cpp", "js"]

// coding.forEach( function (val) {              // callback fun
//     console.log(val);
// } )

// coding.forEach( (item) => {                    // arrow fun
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item,index, arr);
// })



// array ke under object 

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})