
function num_of_digits(input){
    const regex = /\d/g;
    let allDigits = (input+"").match(regex);
    
    return allDigits.length;
}

let input = 1305981031;

let digitCount = num_of_digits(input);   
console.log(digitCount);