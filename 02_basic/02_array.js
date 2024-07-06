const marvel_heros = ["ironman", "captainamerica", "thor"]
const dc_heros = ["superman", "batman", "flash"]

marvel_heros.push(dc_heros)

console.log(marvel_heros) 
/* [
  'ironman',
  'captainamerica',
  'thor',
  [ 'superman', 'batman', 'flash' ]
]
*/
console.log(marvel_heros[3][1]); // batman

const dc_marvel = marvel_heros.concat(dc_heros)
console.log(dc_marvel) // [ 'ironman', 'captainamerica', 'thor', 'superman', 'batman', 'flash' ]


// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros); // [ 'ironman', 'captainamerica', 'thor', 'superman', 'batman', 'flash' ]


const another_array = [1, 2, 3, [4, 5, 6], 7, [6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) // The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth

console.log(real_another_array); // [  1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]


console.log(Array.isArray("arnab")) // false
console.log(Array.from("arnab")) // [ 'a', 'r', 'n', 'a', 'b' ]
console.log(Array.from({name : "arnab"})); // [] 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//[ 100, 200, 300 ]