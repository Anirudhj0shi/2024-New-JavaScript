// const arr = [10,20,false,"Yash","Superman",'a',"b",1.25,'h']
// console.log(arr)

const movies =[
{title:'Ra.one',Actor:"SRK",release:'2012',hit: false,Flop:true} ,
{title:'Infinity-war',Actor:"RDJ",release:'2018',hit: true,Flop:false}, 
{title:'Dhoom 3',Actor:"Aamir khan",release:'2011',hit: true,Flop:false}, 
{title:'jai ho',Actor:"SAlman bhoi",release:'2012',hit: false,Flop:true}  
]

console.log(movies)

for(let i = 0; i<movies.length ; i++)
{
    console.log(movies[i].Actor)
}
