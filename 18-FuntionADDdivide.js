

function Sum(a,b){
    console.log(`Sum of ${a} and ${b} = ${a+b}`)
    alert(`Sum of ${a} and ${b} = ${a+b}`)
}
function Subtract(a,b){
    console.log(`Sub of ${a} and ${b} = ${a-b}`)
    alert(`Sub of ${a} and ${b} = ${a-b}`)
}
function Multiply(a,b){
    console.log(`Mul of ${a} and ${b} = ${a*b}`)
    alert(`Mul of ${a} and ${b} = ${a*b}`)
}
function Divide(a,b){
    console.log(`Div of ${a} and ${b} = ${a/b}`)
    alert(`Div of ${a} and ${b} = ${a/b}`)
}

// Sum(20,10)
// Subtract(20,10)
// Multiply(20,10)
// Divide(20,10)
let operator = prompt("Enter the operation\nfor sum 1 \n for Subtraction 2\n  Multiply 3\n Divide 4 ");

let a = parseInt(prompt("Enter the first number:"));
let b = parseInt(prompt("Enter the second number:"));

switch (operator) {
    case 1:
            Sum(a,b);
        break;
    case 2:
            Subtract(a,b);
        break;
    case 3:
            Multiply(a,b);
        break;
    case 4:
            Divide(a,b);
        break;

    default:
        console.log("Invalid Operator")
        break;
}

//This program can only run on browser so instead we can use this in html and run this code on browser
