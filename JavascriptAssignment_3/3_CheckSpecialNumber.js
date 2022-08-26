
//Function to check if a given number is a special number or not.

function checkSpecialNumber(input){
    let inputLength = input.toString().length;
   
    let sumOfFactorials=0;
    for(let i=0;i<inputLength;i++){
        let currentDigit = input.toString().charAt(i);
        factorial = getFactorial(currentDigit);
        sumOfFactorials += factorial;
    }

    if(sumOfFactorials === input){
        return true;
    }else{
        return false;
    }
}

//function to get factorial
function getFactorial(input){
    let output = 1;
    for(let i=1;i<=input;i++){
        output *= i;
    }
    return output;
}

let input = 145;
let result = checkSpecialNumber(input);

if(result){
    console.log(`${input} is a SPECIAL number`);
}else{
    console.log(`${input} is NOT a SPECIAL number`);
}