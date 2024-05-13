const specialchar = (string) => {
    let specialCount = 0;
    let alphabetCount = 0;
    let Alphabet = [];
    let specialchar = [];

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        let charCode = string.charCodeAt(i);

        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            // Count alphabets (uppercase and lowercase)
            Alphabet.push(char)
            alphabetCount++;
        }
        else{
            specialchar.push(char)
            // console.log("Special character")
            specialCount++;
        }
    }
    
    console.log("Special characters count:", specialCount);
    console.log("Alphabets count:", alphabetCount);
    console.log(Alphabet);
    console.log(specialchar);
}
const string = "Hello!@#$";
specialchar(string);