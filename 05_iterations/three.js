// for of

// ["", "", ""]
// [{}, {}, {}]

/*
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"

for (const greet of greetings) {
    console.log(`Each character is ${greet}`);    
}
*/

// Maps
const map = new Map()
map.set('IN', "INDIA")
map.set('ENG', "ENGLAND")
map.set('AUS', "AUSTRALIA")

console.log(map);

for (const [key, Value] of map) {
    console.log(key, ':-', Value);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key,  ':-', value);
// } -> TypeError: myObject is not iterable
