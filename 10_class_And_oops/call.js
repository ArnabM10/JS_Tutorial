function SetUserName(username) {
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser (username, email, password) {
    SetUserName.call(this, username) // for refernce holding we are using call

    this.email = email
    this.password = password
}

const arnab = new createUser("Arnab", "arnab@a.com", "123")
console.log(arnab);