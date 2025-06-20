const accountId = 144553
let accountEmail =  "ayush@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // so if we do not declare anything in the variable then it is undefined in javascript.

// accountId = 2 // not allowed in javascript beacuse of constant keyword 

accountEmail = "ay@ay.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); //this is used to show data in a tabular form and we can store all the variables at once instead of writing differentely


