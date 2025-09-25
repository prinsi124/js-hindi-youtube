// reduce 

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {                // acc=accumulator currval= currentValue
//         console.log(` acc: ${acc} and currval: ${currval}`);   
//         return acc + currval
// }, 0)        



// arrow fun

const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)

console.log(myTotal);



const shoppingCart = [
    { 
        itemName: "Black Purse",
        price: 499
    },
    { 
        itemName: "Light Blue Purse",
        price: 599
    },
    { 
        itemName: "Light Green Purse",
        price: 299
    },
    { 
        itemName: "White Purse",
        price: 999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
