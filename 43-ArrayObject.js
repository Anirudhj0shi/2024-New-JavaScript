const Salary = [
    {emp: 1, Salary:100},
    {emp: 2, Salary:200},
    {emp: 3, Salary:300},
    {emp: 4, Salary:400},
    {emp: 5, Salary:500},
    {emp: 6, Salary:600},
    {emp: 7, Salary:700},
    {emp: 8, Salary:800}
]

// let result = Salary.slice(3,9)

// console.log(result)

let result = Salary.slice(3,9)
console.log(result)


let SalarySum = 0 
for(let element of result) SalarySum += element.Salary;

console.log(SalarySum)
