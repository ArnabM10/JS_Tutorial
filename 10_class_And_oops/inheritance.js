class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is  ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New Course added by  ${this.username}`);
  }
}

const newUser = new Teacher("arnab", "arnab@com", "123");
newUser.addCourse();
newUser.logMe();

const secondUser = new User("ram");
secondUser.logMe();

console.log(newUser instanceof Teacher); // true
console.log(newUser instanceof User); // true