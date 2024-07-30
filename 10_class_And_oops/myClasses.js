// ES6

class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    encryptPassword() {
        return `${this.password} abc`
    }
    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const newUser = new User("arnab", "Arnab@rmail.com", "123")

console.log(newUser.encryptPassword());
console.log(newUser.changeUsername());

// behind the scene

function userTwo (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

userTwo.prototype.encryptPassword = function () {
    return `${this.password} abc`
}
userTwo.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const secondUser = new userTwo ("ram", "ram@gmail.com", "456")

console.log(secondUser.encryptPassword());
console.log(secondUser.changeUsername());