//check if given number is a prime number or not
"use strict"

let input=17

let counter=2

let isPrime=true;
let sqrtInput=Math.sqrt(input)
while(counter<=sqrtInput){
    if(input % counter == 0){
        isPrime=false;
    }
    counter++;
}

if(isPrime){
    console.log(`${input} is a prime number`)
}else{
    console.log(`${input} is a not a prime number`)
}