const Salary = [
    {emp: 1, Salary:100 , name:'superman'},
    {emp: 2, Salary:200, name:"Bill gates"},
    {emp: 3, Salary:300, name:"Mukesh ambani"},
    {emp: 4, Salary:400, name:"yash"},
    {emp: 5, Salary:500, name:"Anirudh"},
    {emp: 6, Salary:600, name:"Babli"},
    {emp: 7, Salary:723, name:"elon musk"},
    {emp: 8, Salary:813, name:"batman"}
];

const evenSalaryEmp = []

for(let element of Salary){
    if(element.Salary %2 == 0 )
    {
        evenSalaryEmp.push(element)
    }
}

console.log("even Salary array ", evenSalaryEmp)


