
function isFirstCharLowerCase(input){
    let firstChar = input.charAt(0);
    
    if(firstChar>='a' && firstChar<='z'){
        return true;
    }else{
        return false;
    }

}

let input = "Weather is very good today";
console.log(isFirstCharLowerCase(input));