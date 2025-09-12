// singleton or constructor

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// object ke under object

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Prinsi",
            lastname: "Gediya"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


// object combine

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) 

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// database value aye to  array ke under object

const users =[
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 1,
        email: "P@gmail.com"
    },
    {
        id: 1,
        email: "P@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// property value he kya naii 

console.log(tinderUser.hasOwnProperty('isLogged'));



// const obj1 = {1: "a", 2: "b"} = console ma inspect kri ne jova nu