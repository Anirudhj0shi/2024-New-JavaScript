const str = "Education"

console.log("To find the length of array =>",str.length)
const str1 = str.toLowerCase()
// console.log(srt.charAt(0))
for(let i = 0; i<str.length ; i++){
    // console.log(str.charAt(i).toLowerCase())
    if(str1.charAt(i)== 'a' || str1.charAt(i)== 'e' || str1.charAt(i)== 'i' || str1.charAt(i)== 'o' ||str1.charAt(i)== 'u'){
        console.log("These are vowels =>",str1.charAt(i))
    }
    else{
        console.log("These are consonents =>",str1.charAt(i))
    }
}

