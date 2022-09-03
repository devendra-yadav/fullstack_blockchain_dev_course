
function computeDash(input){
    //if input is a number then convert to string.
    input = input+"";

    let array = input.split("");
    
    let counter=0;

    let output = array.reduce((currentOutput, currentDigit)=>{
        if(currentDigit%2 ==0){
            if(counter!=0){
                if(array[counter-1] % 2 == 0){
                    currentOutput = currentOutput + "-" + currentDigit;
                }else{
                    currentOutput = currentOutput + currentDigit;
                }
            }else{
                currentOutput = currentOutput + currentDigit;
            }
        }else{
            currentOutput = currentOutput + currentDigit;
        }
        counter++;
        return currentOutput;
    },"");

    return output;
}

let input = "2584768";
let output = computeDash(input);
console.log(`computeDash of ${input} : ${output}`);