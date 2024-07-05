const name = "arnab"
const repoCount = 13

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('arnab-am')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4))
console.log(gameName.indexOf('n'))

const newString = gameName.substring(0, 4)
console.log(newString) 


const anotherString = gameName.slice(-7, 4)
console.log(anotherString);

// trim and replace ->
const newStringOne = "      arnab   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://arnab.com/arnab%20manna"

console.log(url.replace('%20', '-'))
console.log(url.includes('arnab'))

console.log(gameName.split('-'));