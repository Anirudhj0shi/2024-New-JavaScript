const arr = [10,20,30,40,"Superman","Spiderman",30.45,false,"marvel"] 


const mySlice = (startIndex,endIndex) => {
    const Newarr = [];

    for(let i = startIndex;i<endIndex ; i++){
        Newarr.push(arr[i]);
    }

    return Newarr;
} 
console.log("original slice",arr)
console.log("My slice",mySlice(3,7))


