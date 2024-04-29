let List = [1,0,5,8,7,12,10,25,15]

let High = List[0];

let SH;

for(let i =1;i<List.length;i++){
    if(High<List[i]){
        SH= High;
        High = List[i]
    }
    else if(SH<List[i])
    {
        SH=List[i];
    }

}
//Highest Number in ARRAY    
console.log(High)
//Second Highest Number in ARRAY   
console.log(SH)