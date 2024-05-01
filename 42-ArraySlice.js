const arr = [10,20,30,40,"Superman","Spiderman",30.45,false,"marvel"] 
//before
console.log(arr)
//Slice() => this will create a shallow copy of a array from start to end points(index given ) no changes will be made in the original array
const result = arr.slice(5,8)
console.log(result)