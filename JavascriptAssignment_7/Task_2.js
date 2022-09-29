function removeWhiteSpaces(input){

    if(input == undefined){
        return "";
    }

    let inArr = input.split(" ");
    let out = inArr.reduce((currOutput, currElement)=>{
        currOutput = currOutput + currElement;
        return currOutput;
    });

    return out;
}

let input = "Hello                    how are               you?";
let output = removeWhiteSpaces(input);
console.log("Output : ", output);