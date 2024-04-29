let List = [1,8,7,9,11,7,5,0,3]

let Middle;
if(List.length%2==0){
    Middle= List.length/2;
}
else
{
    Middle = List.length/2+1/2;
}

let List1 = []; 
let List2 = []; 

for(let i = 0; i < Middle ; i++ ){
    List1.push(List[i])
}
for (let i = Middle;i<List.length;i++)
{
    List2.push(List[i])
}

console.log(List1)
console.log(List2)