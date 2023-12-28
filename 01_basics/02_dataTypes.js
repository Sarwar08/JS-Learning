/*
1. Initially Classes, modules, arrow function was not in JS.
2. "use strict" - Treats all JS code as newer version. Without it newalso version.
3. alert(3+3) //ReferenceError: alert is not defined 
    //This only runs inside browser.We are using Node.js.
4. ";" - Writing or not writing both are same. Not mandatory. Readability is important.
5. Documentation: 
    - mdn - easy and we will use it most of the time. But its not original.
    - tc39.es - Original doc. EcmaScript org to write JS standard. 
        - global objects
        - datatypes
*/

// alert(3+3)
let name = "sarwar"
let age = 10
let isLoggedIn = false


// number => 2 to power 53
// bigint => normally its not used. But for big number it may be used.
// string => "" or ''; "" is preferable.
// boolean => true/false
// null => standalone value. Temperature 0; its a value. But if sys fails then null. 
// undefined 
// symbol => Its used for uniqueness. Mostly used in react.
// object => 

console.log(typeof undefined); //undefined

console.log(typeof null); // object