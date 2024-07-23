// {} -> scope,  In object this are also seen , but they are part of object declaration

// var c = 50;
let a = 300
if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "arnab"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

// one()
if (true){
    const userFirstName = "arnab"
    if(userFirstName === "arnab"){
        const userLastName  = " manna"
        console.log(userFirstName + userLastName);
    }
    // console.log(userLastName);
}
// console.log(userFirstName);

// +++++++++++++++++++++++ Interesting ++++++++++++++++++++

console.log(addone(5));
function addone(num){
   return num + 1; 
}

addTwo(5) // this will throw an error becuase here we done function declaration and also hold the function into a variable

const addTwo = function(num) {
    return num + 2;
}
