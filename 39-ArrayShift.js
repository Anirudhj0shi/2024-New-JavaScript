const arr = [10,20,30,40,"Superman","Spiderman",30.45,false] 
//before
console.log(arr)

//Shift => Remove the first element from the array

//after
// arr.shift()

// for(let i = 0; i<arr.length ; i++){
//     arr.shift()
//     console.log(arr.length)
// }
// console.log(arr)

for(let i = arr.length ; i>=0 ; i--){
    arr.shift()
}
console.log(arr)