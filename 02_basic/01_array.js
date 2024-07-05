// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["ironman", "batman"]

const  myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)  // 0 1 2 3 4 5 6
// myArr.push(7)
// myArr.pop()

myArr.unshift(10) // 10 0 1 2 3 4 5
myArr.shift()  // 0 1 2 3 4 5

console.log(myArr.includes(9)) // false because it is not present in the array
console.log(myArr.indexOf(3)); //3rd no index

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

// slice, splice

console.log("A " , myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);