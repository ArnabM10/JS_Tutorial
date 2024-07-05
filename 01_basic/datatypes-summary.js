// Primitive

// 7 types : String, Number, Boolean, null(empty), undefined, symbol -> to make some values as unique , BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber =  125445451464616414664616n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironman", "captain america",  "batman" , "superman"]
let myObj = {
    name : "arnab",
    age : 20,
}

const myFunction  = function(){
    console.log("Hello I am a function")
}

console.log(typeof myFunction); //it returns objects but it is actually called as function objects

// Stack (Primitive), Heap (Non-primitive) ===>
// In stack we get the copy of the variable 
// In heap we get the referece of the variable
let myName = "Arnab Manna"
    
let anotherName = myName;
anotherName = "arnab"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "arnab@google.com"
console.log(userOne.email)
console.log(userTwo.email)