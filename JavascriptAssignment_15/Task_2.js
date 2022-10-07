
function mimicRightShift(input, shift){
    if(shift === 0){
        return input;
    }
    let output = Math.floor(input/2);
    shift--;
    output = mimicRightShift(output, shift);
    return output;

}

let inputNum=10000;
let numOfRightShifts = 9;

let output = mimicRightShift(inputNum, numOfRightShifts);

console.log(output);