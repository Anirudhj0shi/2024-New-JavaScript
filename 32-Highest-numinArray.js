let List = [1,5,0,8,7,11,25,3]

let High = List[0]

for(let i= 1; i<List.length;i++){
    if(High<List[i]){
        High = List[i];
    }
}
    console.log(High);