// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1)
// console.log(2 == 1)
// console.log( 2 != 1)


// console.log("2" > 1);
// console.log("02" > 1);


/* The reason is that an equality check 
== and comparison > < >= <= work differently
 -> comparison covert null to a nmuber, trating it as 0.
 that's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// console.log(null > 0);
// console.log(null ==  0);
// console.log(null >=  0);

// console.log(undefined == 0)
// console.log(undefined > 0);
// console.log(undefined < 0);

// ===  strickly checks it means it checks not only types  also checks the values

console.log("2" === 2)
