const arr = [10,55,1,2,254,78,79,82,110,100,230,440,4,5,7,56]
const target = 230
let i = 0;
for(i ; i<arr.length ; i++){
    if(arr[i] == target){
        console.log("element found",i)
        break;
    }
}
if(i == arr.length){
    console.log("not found")
}