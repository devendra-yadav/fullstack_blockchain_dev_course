function replaceChar(input, charToReplace, replacement) {
    
    if(input == undefined){
        return "";
    }
    
    let output = input.replace(charToReplace, replacement);

    return output;
    
}

let input = "apple";
let output = replaceChar(input,"a","x");
console.log("Output : ", output);