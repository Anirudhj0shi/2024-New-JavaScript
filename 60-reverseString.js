const reverse = (string) => {
    // let l = string.length;
    let string2 = "";
    

    for(let i = string.length - 1 ; i >= 0 ; i--){
        // let char = string.charAt(i);
        string2 += string[i]
    }

    console.log(string2)
}
const string = "Superman"
reverse(string)