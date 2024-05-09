const binarySearch = (arr,target) =>{
    let s = 0;
    let e = arr.length-1;
    let mid;
    
    while(s <= e){
        mid = Math.floor((s+e)/2);
        
        if(arr[mid] == target){
            return mid;
        }

        else if(arr[mid] > target){
            e = mid - 1;
        }
        else if(arr[mid] < target){
            s = mid + 1;
        }
    }
    return -1;

};


const arr = [10,20,30,500,600,750,1200,1900,2400];
let target = 750;
const result = binarySearch(arr,target);
// console.log(result)
if(result == -1){
    console.log("Element not found")
}
else{
    console.log("Element found at index number =>",result)
}

