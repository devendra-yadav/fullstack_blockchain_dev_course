
//function to check if given number is an armstrong number or not
function isArmstrongNumber(input) {
    let inputLength = input.toString().length;
   
    let sumOfCubes=0;
    for(let i=0;i<inputLength;i++){
        let currentDigit = input.toString().charAt(i);
        sumOfCubes += currentDigit * currentDigit * currentDigit;
    }

    if(sumOfCubes === input){
        return true;
    }else{
        return false;
    }
    
}

let input = 407;
let result = isArmstrongNumber(input);

if(result){
    console.log(`${input} is an ARMSTRONG number`)
}else{
    console.log(`${input} is NOT an ARMSTRONG number`)
}