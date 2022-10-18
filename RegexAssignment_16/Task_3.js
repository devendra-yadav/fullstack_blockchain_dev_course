function isPrime(input){
    //convert input to unary format.
    let inputNumber = Number.parseInt(input);
    let unaryInput = "1".repeat(inputNumber);

    const regex=/^1?$|^(11+?)\1+$/;

    let output = unaryInput.match(regex);
    if(output==null){
        return true;
    }else{
        return false;
    }
}


console.log(isPrime("7"));
console.log(isPrime("17"));
console.log(isPrime("13"));
console.log(isPrime("4"));
console.log(isPrime("14"));