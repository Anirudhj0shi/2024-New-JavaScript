//1. GLobal Scope [variable]
//2. 

// const test = () => {
//     let a = 2;
//     let b = 3;
//     console.log(a,b)

// }

let a = 10;
let b = 20;
console.log(a,b)
const test =(a,b) =>{
    a=30,b=40

} 
test(a,b)
console.log(a,b)