let input = [1,2,3,4,5];

let sum = input.reduce((total, element)=>{
    total = total + element;
    return total;
},0);

console.log(sum);

let average = sum/input.length;
console.log(average);