const vowels = (string) =>{
    let vowelsCount = 0;
    let constCount = 0;
    let vowels = []
    let consonent = []

    let str1 = string.toLowerCase()

    for(let i = 0; i<str1.length ; i++){
        let char = str1.charAt(i);
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'){
            vowelsCount++;
            vowels.push(string.charAt(i))
        }
        else{
            constCount++;
            consonent.push(string.charAt(i))
        }
        
    }
    console.log("total vowels present = >",vowelsCount,"=>",vowels) 
    console.log("total consonent present = >",constCount,"=>",consonent) 
}

const str = "EdUCaTIon"
vowels(str)