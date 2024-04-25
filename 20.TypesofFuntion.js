// These are the four type of functions 

// 1. function with argument and return type
// 2. function with argument and no-return
// 3. function without argument and with return
// 4. function without both



//(1.) 
function sum(a,b)
{
    console.log(`sum of ${a} and ${b} = ${a+b}`)
    return a+b;
}

// (2.)
function MUL (a,b)
{
    console.log(`MUL of ${a} and ${b} = ${a*b}`)
} 

// (3.)
function div()
{
    let a =300;
    let b =10;
    console.log(`division of ${a} and ${b} = ${a/b}`)
    return a /b ;
}

// (4.)
function test()
{
    let a =300;
    let b =10;
    console.log(`division of ${a} and ${b} = ${a/b}`)
}
//u have to store the sum in result and then use it in console log
// console.log(sum(10,50))

//calling sum function 
const result = sum (10,50)
console.log(result)

//calling multiplication function 
MUL(50,25)

//calling di function
const resultDIV = div()
console.log(resultDIV) 