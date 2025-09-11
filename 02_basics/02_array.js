const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["supernam", "flash", "batnam"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allheros = marvel_heros.concat(dc_heros)    // concat se to array ko combine krata he
// console.log(allheros);                            // limit one value 

// concat or spread 

const all_new_heros = [...marvel_heros, ...dc_heros]     // vadhre value
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5,6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)       // all value ne ak sathe print krava mate 
// console.log(real_another_array);



// data screming wen pagese 

console.log(Array.isArray("Prinsi"));        // ae que puch shakte he array he ke nai
console.log(Array.from("Prinsi"));           // convert array ke under
console.log(Array.from({name: "Prinsi"}));     // ae value hume empty hi deke // interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));   //multiple array ne convert krva mate (of) no use