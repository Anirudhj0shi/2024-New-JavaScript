const Palindrome = (string) => {
    let string2 = "";
    

    for(let i = string.length - 1 ; i >= 0 ; i--){
        // let char = string.charAt(i);
        string2 += string[i]
    }
    if(string == string2){
        console.log("the string is a palindrome")
    }
    else{
        console.log("non palindrome string")
    }

    console.log(string, string2)
}

const string = "yellow"
Palindrome(string)