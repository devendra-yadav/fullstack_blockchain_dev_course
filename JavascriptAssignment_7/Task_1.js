
function truncate(input){

    if(input == undefined){
        return "";
    }

    if(input.length <= 4){
        return input;
    }else{
        return input.substring(0,4);
    }
}

let input="ABCDEF";
let output = truncate(input);
console.log("output : ", output);