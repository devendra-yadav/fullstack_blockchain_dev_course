
function toUpperCase(input){
    
    let output="";
    for(let i=0;i<input.length;i++){
        output = output+input[i].toUpperCase();
        
    }
    
    return output;
}

function convertFirstCharToUpperCase(input){
    let output = input[0].toUpperCase()+input.slice(1);
    return output;
}

function toLowerCase(input){
    let output = "";
    for(let i=0;i<input.length;i++){
        output = output+input[i].toLowerCase();
    }
    
    return output;
}

function countRepeatingCharacters(input){
    let map=new Map();
    for(let i=0;i<input.length;i++){
        let currentChar = input[i];
        if(map.get(currentChar) == undefined){
            map.set(currentChar,1);
        }else{
            map.set(currentChar, map.get(currentChar)+1);
        }
    }

    return map;
}

function breakAndSwap(input){
    let firstHalf = input.slice(0, input.length/2);
    let secondHalf = input.slice(input.length/2, input.length);
    return secondHalf + firstHalf;
}

function reverse(input) {
    let inputArr = input.split("");
    
    for(let i = 0, j=inputArr.length-1; i<=j ; i++, j--) {
        let temp = inputArr[i];
        inputArr[i] = inputArr[j];
        inputArr[j] = temp;
        
    }
    
    return inputArr.join("");
}

let input = "how are you";
console.log(toLowerCase(input));
console.log(convertFirstCharToUpperCase(input));
console.log(toUpperCase(input));
console.log(breakAndSwap(input));
console.log(countRepeatingCharacters(input));
console.log(reverse(input));