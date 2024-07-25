const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py",  "java", "cpp"]
for (const key in programming){
    console.log(programming[key]);
}


// const map = new Map()
// map.set('IN', "INDIA")
// map.set('ENG', "ENGLAND")
// map.set('AUS', "AUSTRALIA")
// for (const key in map){
//     console.log(key);
// }

