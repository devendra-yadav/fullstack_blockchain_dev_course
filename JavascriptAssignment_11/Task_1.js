/*
1. Write a JavaScript program to take an array as input from the user and calculate
the sum of numbers in odd places and the sum of numbers at even places.
a) Print the difference between the two sums
b) Print the number of elements in odd places
c) Print the number of elements in even places
d) Print the average of all elements in the array
e) Print GCD of Sum of Numbers at Odd Places and Sum of Numbers at Even
Places
*/

function getOddSum(array){
  
    let i=1;
    let sumOfOddPlaces = array.reduce((sum, element)=>{
        if(i%2==1){
            sum = sum + element;
            oddElementsCount++;
        }
        i++;
        return sum;
    },0);

    return sumOfOddPlaces;
}

function getEvenSum(array){
    let i=1;
    let sumOfEvenPlaces = array.reduce((sum, element)=>{
        if(i%2==0){
            sum = sum + element;
            evenElementsCount++;
        }
        i++;
        return sum;
    },0);

    return sumOfEvenPlaces;
}

function getAverage(array){
    let totalElements = array.length;
    let sum = array.reduce((sum, element)=>{
        sum = sum + element;
        return sum;
    },0);

    return sum/totalElements;
}

function getGCD(num1, num2) {
    let i=2;
    let smaller = num1<num2?num1:num2;
    let gcd=1;
    while(i<=smaller) {
        if(num1 % i ==0 && num2 % i == 0) {
            gcd=i;
        }
        i++;
    }

    return gcd;
}

let input = [1,2,3,4,5];

let evenElementsCount = 0;
let oddElementsCount = 0;
let evenSum = getEvenSum(input);
let oddSum = getOddSum(input);


console.log("Difference = "+(oddSum - evenSum));
console.log("Odd Elements = "+oddElementsCount);
console.log("Even Elements = "+evenElementsCount);
console.log("Average = "+getAverage(input));
console.log("GCD = "+getGCD(evenSum, oddSum));