// Immediately Invoked Function Expressions IIFE 

// ae fun jb apko imm executed krana he tab 
// database connected 
                                 // iife =  global scope ke prolusion se problem hoti he to kaihi bar 
                                 // us global scope ke jo variable he jo bhi vaha declartion he uske prolusion ko  hatane ki liye iife ka use krete he


(function chai() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();                                         // bane sarkha fun mte ;end use krvo

( (name) => {                                     // arrow fun
    console.log(`DB CONNECTED TWO ${name}`);
} )('prinsi')


// ()()    // 1 defition 2 execution