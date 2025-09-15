// var c = 300
 // {} ni bar ni value global je global ni value under hoi but {}ni value bar na hoii
// function or ifelse ke sathe he to use {} scope kete he
let a =300

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// nested scope

function one() {           
    const username = "Prinsi"

    function two() {                 // child variable sirf perent vaiable ko access krta he
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

// one()

if (true) {
    const username = "Prinsi"
    if (username === "Prinsi") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// +++++++++++ interesting ++++++++++++

console.log(addOne(5))

function addOne (num){             // declare kriyu che atle 
     return num + 1
}


addTwo(5)

const addTwo = function(num) {      // variable ko hold kiya he ishliye
    return num + 2
}

