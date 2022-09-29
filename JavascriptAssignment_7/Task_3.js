function swapWords(input){
    
    if(input == undefined){
        return "";
    }
    
    let inArr = input.split(" ");

    //if less than 2 words then just send 1st word
    if(inArr.length <2){
        return inArr[0];
    }else{
        //if 2 or more than 2 words then just used 1st 2 words
        return inArr[1]+" "+inArr[0];
    }

}

let input = "Hello World";
let output = swapWords(input);
console.log("Output : ", output);