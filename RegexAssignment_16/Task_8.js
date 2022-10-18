function isValidHexCode(input){
    const regex=/^#[0-9A-Fa-f]{6}$/gi;
    let output = input.match(regex);
    if(output==null){
        return false;
    }else{
        return true;
    }
}

console.log(isValidHexCode("#000000"));
console.log(isValidHexCode("#Ac9823"));
console.log(isValidHexCode("A#c9823"));
console.log(isValidHexCode("#AK898999"));