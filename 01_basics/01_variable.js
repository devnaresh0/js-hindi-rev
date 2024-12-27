const accountId = 144553;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// agr declare means undefined to js
// Why not to use var
/* 
in initial days
Js ko pta nhi hota tha ki scope kya hai
{
    isiko scope bola jata hai
    agr usne koi value add kr di kisi variable ke andr to
    to vo sb jagah change ho jata tha
    agr kisi ne koi variable 10 jgh likha hota tha to vo 
    10 jagah change ho jata tha
- never use var

}

*/
/*
Prefer not to use var
becuase of issue in block scope and functional scope
*/

// javascript ke andr jo compiler h uske andr
// defined hai ki ye keyword mile to ye kro ye mile to ye kro
/*

Prefer not to use var
because of issue in block scope and functional scope

*/
// accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bagaluru"

console.log(accountId);
console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// const means constant that does not change
