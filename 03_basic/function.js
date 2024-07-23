// function  -> basically function is a creation of a package where bunch of code executes

function sayMyName(){
    console.log("a");
    console.log("r");
    console.log("n");
    console.log("a");
    console.log("b");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+ number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1+number2;
    // return result;
    return (number1+number2);
}

const result = addTwoNumbers(5,4)
// console.log("Result: ", result);

function logInUserMessage(userName){
    if (userName === undefined){
        console.log("Please enter a userName");
        return;
    }
    return `${userName} just logged in`
}
// console.log(logInUserMessage("arnab")); // arnab just  logged in
// console.log(logInUserMessage("")); // just logged in
// console.log(logInUserMessage()); // undefined just logged in

// . . . -- rest 
function calculateCarPrice(...num1){
    return num1;
}
// console.log(calculateCarPrice(200, 400, 500, 300)); [200, 400, 500, 300]

const user = {
    username : "arnab",
    price : 123
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Ram",
    price : 321
})
// Username is Ram and price is 321

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[0];
}

console.log(returnSecondValue(myNewArray)); // 200
console.log(returnSecondValue([500, 400, 800, 1000])); // 500