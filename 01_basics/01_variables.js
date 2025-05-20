const accountId = 102103
let accountEmail = "prinsi@google.com"
var accountPassword = "1234"
accountCity = "surat"
let accountState;

// accountId = 2 // not allowed

accountEmail = "pg@pg.com"
accountPassword = "1011"
accountCity = "vapi"


console.log("accountId");

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
