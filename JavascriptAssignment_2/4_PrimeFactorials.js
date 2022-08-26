
//function to calculate of factorial of all prime numbers between a given range
function calculatePrimeFactorials(start, end){

    for(let i=start;i<=end;i++){
        let isPrime = isPrimeNumber(i);
        if(isPrime){
            let factorial = getFactorial(i);
            console.log(`${i}! = ${factorial}`);
        }
           

    }
}

//check if a given number is prime number or not
function isPrimeNumber(input){
    let counter =2 ;
    while(counter <= Math.sqrt(input)){
        if(input % counter === 0){
            return false;
        }
        counter++;
    }

    return true;
}

//calculate factorial of given number
function getFactorial(input){
    let output = 1;
    for(let i=1;i<=input;i++){
        output *= i;
    }
    return output;
}


let start = 1;
let end =100;
calculatePrimeFactorials(start, end);