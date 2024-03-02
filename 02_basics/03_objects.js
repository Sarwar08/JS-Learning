// we can declare objects in ways - Constructor or Literal.
// Another concepts comes here is singleton. When we declare through Constructor then singleton can be an object. 
// Object Literal: It is not singleton.

// Object.create      // This is through constructor. It creates singleton.

// const JsUser = {}  // Object Literals
 
// Declaration through - Object Literals

//symbol declaration
const mySymbol = Symbol("key1") // is used as a key

const JsUser = {
    name: "sarwar",  // key and values: We can define both key and value. Key is assined as string.
    "full name": "sarwar habib",
    [mySymbol]: "mykey1",
    age: 22,
    location: "Dhaka",
    email: "sarwar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
} 

/* Object access
JsUser.email 
JsUser["email"]
There is no way to access "full name" key through JsUser.full name 
Here we have to access this "full name" through JsUser["full name"]
*/

// changing objects:
JsUser.email = "sarwar@openai.com"

// Object freeze - so that no body can change the object
Object.freeze(JsUser)

// Adding Function to object: It is treated like a variable
JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`) // string interpollation
}

console.log(JsUser.greeting); // function(anonymous)
console.log(JsUser.greeting()); // it shows the result (we need to remove freeze)

// undefined might come


// in array - myArr = ["s", "a"]; Here only we can use can access myArr[0];
