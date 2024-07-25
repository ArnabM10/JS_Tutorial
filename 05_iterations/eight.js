// reduce method
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and curval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce ( (acc, curr) => {
    return acc + curr
}, 0)


console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 999
    },
    {
        itemName : "DSA course",
        price : 3999
    },
    {
        itemName : "py course",
        price : 1999
    },
    {
        itemName : "mobile dev course",
        price : 2999
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => {
    return item.price +  acc
}, 0)

console.log(priceToPay);