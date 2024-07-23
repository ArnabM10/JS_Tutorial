// Immediately Invoked Function Expression (IIFE)
// global scope ka polution hatane k liye IIFE ka use kara hain


// named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();  // if you don't give semicolon the error will be occur

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('arnab') 