const name = "prinsi"
const repoCount = 50

// console.log(name + repoCount + "value");

console.log(`Hello My Name Is ${name} and My repo Count Is ${repoCount}`);

const gameName = new String('prinsuu')

console.log(gameName[0]);
console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-6, 3)
console.log(anotherString);