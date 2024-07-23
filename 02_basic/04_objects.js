// const tindeUser = new Object() -> singleton object
const tindeUser = {} // non singleton 

tindeUser.id = "123abc"
tindeUser.name  = "arnab"
tindeUser.isLoggedIn = false

console.log(tindeUser);

const regularUser = {
    email : "xyz@gmail.com",
    fullName : {
        userfullname: {
            firstname : "arnab",
            lastname : "manna"
        }
    }
}
console.log(regularUser)
console.log(regularUser.fullName)
console.log(regularUser.fullName.userfullname);
console.log(regularUser.fullName.userfullname.firstname)


const obj1 = {
    1 : "A",
    2 : "B"
}
const obj2 = {
    3 : "a",
    4 : "b"
}
const obj3 = {
    5 : "c",
    6 : "d"
}
const obj4 = {obj1, obj2}
console.log(obj4); // { obj1: { '1': 'A', '2': 'B' }, obj2: { '3': 'a', '4': 'b' } }

const obj5 = Object.assign({}, obj1, obj2)  // static method copies all enumerable own properties from one or more source objects to a target object
console.log(obj5); // { '1': 'A', '2': 'B', '3': 'a', '4': 'b' }
const obj6 =  Object.assign({}, obj1, obj2, obj3)
console.log(obj6); // { '1': 'A', '2': 'B', '3': 'a', '4': 'b', '5': 'c', '6': 'd' }

const obj7  = {...obj1, ...obj2}
console.log(obj7); // { '1': 'A', '2': 'B', '3': 'a', '4': 'b' }

const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 1,
        email : "a@gmail.com"
    }
]

users[1].email
console.log(tindeUser);
console.log(Object.keys(tindeUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tindeUser));  // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.entries(tindeUser));  // [ [ 'id', '123abc' ], [ 'name', 'arnab' ], [ 'isLoggedIn', false ] ]
console.log(tindeUser.hasOwnProperty('isLoggedIn'));  // true



const course = {
    courseName : "xyz",
    price : "999",
    courseInstructor : "arnab"
}

// course.courseInstructor

// object destructing
const {courseInstructor: instructor} = course

// console.log(courseInstructor); // arnab
console.log(instructor); // arnab


// JSON
// {
//     "name" : "Arnab",
//     "courseName" : "xyz",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]