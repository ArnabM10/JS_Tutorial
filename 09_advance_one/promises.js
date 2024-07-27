// promise object represents the eventual completion (for faliure) of an asynchronus operation and its resulting value


// three states -> pending, fullfilled, rejected

// creation of a promise
const promisOne = new Promise( (resolve, reject) => {
    // Do an async task
    // DB calls, cryptography, networlk related
    setTimeout( function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})

// promise consumption
promisOne.then( () => {
    console.log("Promise Consumed");
})

// creation of 2nd promise
new Promise ( function (resolve, reject) {
    setTimeout( function() {
        console.log("Async Task 2");
        resolve();       
    }, 1000)
}).then( function() {
    console.log("Async 2 revolved");
    
})

//creation of 3rd promise
const promiseThree = new Promise( function(resolve, reject) {
    setTimeout(function() {
        resolve({username : "arnab", email : "arnab@example.com"})
    }, 1000)
})


promiseThree.then(function(user){
    console.log(user);
})

 
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function(){
        let error = false;
        if(!error) {
            resolve({username: "Arnab" , password : "123"})
        }else  {
            reject ('ERROR : Something went wrong')
        }
    }, 1000)
})

promiseFour
.then( (user) => {
    console.log(user);
    return user.username    
}).then( (username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error);
}).finally( ()=> console.log("The promise is either is resolved or rejected"))




const promiseFive = new Promise ( (resolve, reject)=> {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({username: "Arnab", password : "123"})
        } else {
            reject('ERROR : Something went wrong')
        }
    }, 1000);
})

// async wait => doesn't handle error directly
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

 
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users') 
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);       
    }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then ( (response)=> {
    return response.json()
})
.then( (data) => {
    console.log(data); 
}).catch ( (error) => console.log(error)) 