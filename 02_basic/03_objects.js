// singleton 
// Object.create

// object literals
const mySym =  Symbol("Key1")
// to use symbol in the objects we have to use [varible_name] : 

const JsUser = {
    name : "Arnab",
    "full name" : "Arnab Manna",
    [mySym] : "mykey1",
    age : 20,
    location: "ghatal",
    email : "arnab@gmail.com",
    isLoogedIn : false,
    lasrLogInDays : ["Monday" , "Saturday"]
}

// accessing the objects elements
console.log(JsUser.email);
// console.log(JsUser.full name) // this will throw an error
console.log(JsUser["full name"]);
console.log(JsUser[mySym]); // this is the correct way to acces the symbol

JsUser.email = "arnab@google.com"
// Object.freeze(JsUser)
JsUser.email = "arnab@microsoft.com"
console.log(JsUser);
/* output->
{
  name: 'Arnab',
  'full name': 'Arnab Manna',
  age: 20,
  location: 'ghatal',
  email: 'arnab@google.com',
  isLoogedIn: false,
  lasrLogInDays: [ 'Monday', 'Saturday' ],
  [Symbol(Key1)]: 'mykey1'
}
*/

JsUser.greeting = function() {
    console.log("Hello JS user")
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting); //[Function (anonymous)]
console.log(JsUser.greeting()) // Hello JS user
console.log(JsUser.greetingTwo()) // Hello JS user, Arnab