
function removeLeadingTrailing(input){
    let output=input;

    //first get leadingZeros and remove them
    const leadingZeroRegex=/^0+/g;
    let leadingZeros = input.match(leadingZeroRegex);

    if(leadingZeros!=null){
        output = output.substring(leadingZeros[0].length);
    }
    
    //check if after decimal have trailingZeros.
    const trailingZeros1stLevelRegex = /\.[0-9]+0+$/g;
    let trailingZeros = output.match(trailingZeros1stLevelRegex);
    
    if(trailingZeros!=null){
        //if trailingZeros are present then get the count of those trailingZeros.
        const trailingZeros2ndLevelRegex=/0+$/g;
        let trailingZerosLength = trailingZeros[0].match(trailingZeros2ndLevelRegex)[0].length;
       
        if((trailingZeros[0].length - trailingZerosLength) == 1){
            //when after decimals we have only zeros. we have to remove "." from the output.
            output = output.substring(0, output.length - trailingZerosLength-1);
        }else{
            output = output.substring(0, output.length - trailingZerosLength);
        }
        
    }

    return output;
}

let input = "001200.01000";

let output = removeLeadingTrailing(input);

console.log(output);