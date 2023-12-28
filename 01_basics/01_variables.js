const accountId = 1222
// accountId = 2  // Not Allowed 
let accountEmail = "sarwar@gmail.com"
var accountPassword = "12345"
accountCity = "Dhaka" 
/* Without writing const or let we can reserve memory spaces. 
But its a bad practice */

let accountState;

accountEmail = "abul@..com"
accountPassword = "2222222222222"
accountCity = "CTG"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
┌─────────┬─────────────────┐
│ (index) │     Values      │
├─────────┼─────────────────┤
│    0    │      1222       │
│    1    │  'abul@..com'   │
│    2    │ '2222222222222' │
│    3    │      'CTG'      │
│    4    │    undefined    │
└─────────┴─────────────────┘
What is scope? 
    - In short {...} this curly braces, we can say scope.
N.B.:   DO NOT USE "var".
*/