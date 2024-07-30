let myName  = "Arnab"
console.log(myName.length);


let myHeros = ["wolverine",  "deadpool"]

let heroPower = {
    wolverine : "bone claws",
    deadpool : "Healing",
    getDeadpoolPower : function () {
        console.log(`Deadpool power is ${this.deadpool}`);
    }
}

Object.prototype.arnab = function () {
    console.log(`Arnab is present in all object`);
}


Array.prototype.heyArnab = function () {
    console.log(`arnab says hello`);
}
heroPower.arnab();
myHeros.heyArnab()


// <-----Inheritance-------->

const user = {
    name  : "arnab",
    email : "arnab@email.com"
}

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'Js assignment',
    fullTime  : true,
    __proto__ : TeachingSupport
}

teacher.__proto__ = user;

// modern syntax

Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "Arnab      ";
String.prototype.trueLength = function () {
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True lenght is: ${this.trim().length}`);
}
anotherUserName.trueLength();
"arnab".trueLength();
"manna".trueLength();