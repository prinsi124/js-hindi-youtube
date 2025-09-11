// singleton
// literals ma use na thai  constructor ma thaii interview ma que 
// object.create = constructor kevai

// object literals    {}=object


const mySym = Symbol("key1")

const Jsuser = {
    name: "Prinsi",         // name = key , prinsi = value
    "full name": "Prinsi Gediya",
    [mySym]: "mykey1",
    age: 20,
    location: "surat",
    email: "prinsi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// object value access kree

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);   // string rite "" apvanu
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

// object change

Jsuser.email = "prinsi03@gmail.com"

// value ko lock kre , value change na krvi
// Object.freeze(Jsuser)
Jsuser.email = "prinsi10@gmail.com"   // print na thai freeze kiya hse ishliye 
// console.log(Jsuser);

// function declare 

Jsuser.greeting = function() {
    console.log("Hello Js User");
}
Jsuser.greetingTwo = function() {
    console.log(`Hello Js User, ${this.name}`);      // same object reference=this
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());



// value access krne liye jayada . use kree 