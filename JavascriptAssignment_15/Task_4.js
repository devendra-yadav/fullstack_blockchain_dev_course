
function getDotCount(number){

    let sum=0;
    for(let i=1; i<=number; i++){
        sum=sum+i;
    }

    return sum;
}

function triangle(number){
    let sum=0;
    for(let i=1; i<=number; i++){
        sum = sum + getDotCount(i);
    }

    return sum;
}

let input = 4;
let output = triangle(input);
console.log(output);
