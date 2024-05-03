// for String normal sort could be done  
const Number = ["Anirudh","Yash","Babli","..123","Sanju","Amit","Siyush","Bittu","Ronit"]
console.log(Number.sort());

// for one digits normal sort can be done 
const Number1 =[9,5,0,7,4,1,6,3,8,2]
console.log(Number1.sort());

//lowest number first
const Number2 =[99,5555,1200,765,401,1,645,3058,887952,2020,0]
console.log(Number2.sort((a,b)=>a-b));

//highest number first 
const Number3 =[99,5555,1200,765,401,1,645,3058,887952,2020,0]
console.log(Number2.sort((a,b)=>b-a));