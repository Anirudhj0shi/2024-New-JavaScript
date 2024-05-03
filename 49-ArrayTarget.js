const arr = [10,55,1,2,254,78,79,82,110,100,230,440,4,5,7,56]
const target = 2300
let i = 0;
while(i<arr.length){
    if(arr[i] == target){
        console.log("element found " , i)
        break;
    }
    i++;
}
if(i==arr.length){
    console.log("element not found");
}
