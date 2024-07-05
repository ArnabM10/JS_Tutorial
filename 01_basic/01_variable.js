const accountId = 12242
let accountEmail = "arnab@gmail.com"
var accountPassword =  "12345"
accountCity = "Ghatal"
let accountState;

//accountId = 2 // not allowed

accountEmail = 'arnb@am.com'
accountPassword = '21322'
accountCity = "kolkata"

console.log(accountId);
/* 
prefer not to use var
beacuse of isse of block scope and functional scope
*/


//It shows in tabular structure
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])