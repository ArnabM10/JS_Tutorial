class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
    
    // static block from access
    static createId() {
        return `123`
    }

}

const arnab = new User("Arnab");
// console.log(arnab.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const ram = new Teacher ("ram", "ram@mail.com")
console.log(ram.createId()); // throws an error
ram.logMe();