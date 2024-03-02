// const tinderUser = new Object()  // through constructor - singleton
// const tinderUser = {}  // Non singleton

const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Sarwar"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "abul@gmail.com",
    fullname: {
        userFullname: {
            firstName: "sarwar",
            lastName: "habib"
        }
    }
}

console.log(regularUser.fullname.userFullname.lastName);
/*console.log(regularUser.fullname?.userFullname.lastName);
Here ? checks, if fullname value is there then go otherwise dont go.
*/

// combining or merging objects 
const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4: "d", 5: "e"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2);
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = {...obj1, ...obj2}

console.log(obj3);

// Array of Objects 
const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

// we can retrieve values also.

console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// L-18 started - object destructuring 

const course = {
    coursename: "Js expalined",
    price: "999",
    courseInstructor: "sarwar"
}

// course.courseInstructor

// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// json
{
    "name": "sarwar"
    "courseName": "Js"
    "price": "free"
}

// api can be 
{

}

// array

[
    {},
    {},
    {}
]

// randomuser.me

