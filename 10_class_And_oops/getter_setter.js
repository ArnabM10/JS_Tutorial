class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value.toUpperCase();
    }
    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        return `${this._password}arnab` 
    }
}

const arnab = new User("arnab@ai", "abc")
console.log(arnab.email);