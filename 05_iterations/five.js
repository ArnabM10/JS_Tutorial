const coding = ["js", "java", "cpp", "python"]

// coding.forEach(function (item) {
//     console.log(item);
// })


// using arrow fucnction
// coding.forEach ((value)=>{
//     console.log(value);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) =>{
    console.log(item, index,arr);
})
/*
js 0 [ 'js', 'java', 'cpp', 'python' ]
java 1 [ 'js', 'java', 'cpp', 'python' ]
cpp 2 [ 'js', 'java', 'cpp', 'python' ]
python 3 [ 'js', 'java', 'cpp', 'python' ]
*/


const myCoding = [
    {
        langName : "javascript",
        langFileName : "js"
    },
    {
        langName : "C++",
        langFileName : "cpp"
    },
    {
        langName : "Python",
        langFileName : "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.langFileName);
})