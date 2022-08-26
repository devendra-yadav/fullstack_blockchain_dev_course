
//function to calculate sum of multiples of 3 and 5 under 1000;

function calculate(s){
    let sum = 0;

    for(let i=1; i<1000; i++){
        if(i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }
    
    return sum;
}

console.log(`Sum of all multiples of 3 and 5 under 1000 is ${calculate()}`);
