const user = {
    userName : "Arnab",
    price : 999,
    welcomeMessage: function() {
        console.log(`${this,this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Ram" // context change
// user.welcomeMessage()

// console.log(this); // {} -> empty object


// function chai() {
//     let userName = "Arnab"
//     console.log(this.userName);
// }
// chai()

const chai =  () => {
    let user = "Arnab"
    console.log(this.user);
}
// chai() 
// const addTwo =(num1, num2) => {
//     return num1 + num2
// }

// const addTwo =(num1, num2) =>  num1 + num2
// const addTwo =(num1, num2) =>  ( num1 + num2 )

const addTwo = (num1, num2) => ({username : "arnab"})

console.log(addTwo(3, 6));


const myArray = [2, 5, 3, 7, 8]
// myArray.forEach(() =>())