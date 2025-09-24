// object 

const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by app"
}

for (const key in myObject) {
    // console.log(myObject[key]);            // object = value joti hoi tyre 
    // console.log(`${key} shortcut is for ${myObject[key]}`);          // key and object bane sathe prinst krva mate 
}


// array me for in 

const programming = ["js", "py", "java", "cpp", "rb"]

for (const key in programming) {
//    console.log(programming[key]);
}



// const map = new Map()               // map is unique id che ak j var print thai biji var lakhelu na thaii aeni ae j value 
// map.set('IN', "India")
// map.set('USA', "United states of America")
// map.set('FR', "France")
// map.set('IN', "India")

// for (const key in map) {
//    console.log(key);
// }