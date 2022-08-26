
//function to find factorial of a number
function getFactorial(input){

    //invalid scenario
    if(input <0){
        return -1;
    }

    let factorial = 1;
    for(let i=1;i<=input ; i++){
        factorial = factorial * i;
    }

    return factorial;
}

let input = 14;
console.log(`factorial of ${input} = ${getFactorial(input)}`);