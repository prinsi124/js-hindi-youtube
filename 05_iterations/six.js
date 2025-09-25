// const coding = ["java", "python", "ruby", "cpp", "js"]


// const values = coding.forEach( (item) => {                     // variable 
//     // console.log(item);
//     return item                                   // for each return nahi hota
// })

// console.log(values);


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num < 4)              // condition mukvani 
// const newNums = myNums.filter( (num) => {                       // {}filter ma scope under value hoi to return lakhvu 
//     return num < 4
// })


// for each me 

// const newNums = []

// myNums.forEach( (num) => {
//      if (num > 4) {
//         newNums.push(num)
//      }
// })

// console.log(newNums);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1982, edition: 2004 },
    { title: 'Book Two', genre: 'History', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'Science', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'History', publish: 1987, edition: 2006 }
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1988 && bk.genre === "History"
} )
console.log(userBooks);