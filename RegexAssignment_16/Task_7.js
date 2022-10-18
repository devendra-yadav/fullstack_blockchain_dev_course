function validatePIN(input){
    const regex=/(^\d{4}$)|(^\d{6}$)/g;

    let output = input.match(regex);

    if(output==null){
        return false;
    }else{
        return true;
    }

}

console.log(validatePIN("3235"));
console.log(validatePIN("234512"));
console.log(validatePIN("dsd"));
console.log(validatePIN("12345"));