
function doubleLetters(input){
    const regex = /(\w)\1+/g;

    let output = input.match(regex);
    if(output==null){
        return false;
    }else{
        return true;
    }
    
}


console.log(doubleLetters("yummy"));
console.log(doubleLetters("loop"));
console.log(doubleLetters("abcd"));