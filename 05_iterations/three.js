// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// Maps 

const map = new Map()               // map is unique id che ak j var print thai biji var lakhelu na thaii aeni ae j value 
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// object me for of 

const myObject = {
    game1 : 'NFS',
    game2 : 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }