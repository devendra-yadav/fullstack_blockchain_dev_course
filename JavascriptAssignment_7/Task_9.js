
function isInputYes(input){
    let inputLowerCase = input.toLowerCase();
    
    if(inputLowerCase==="yes"){
        return true;
    }else{
        return false;
    }

}

let input = "yEs";
console.log("User input : '"+input+"'. Is it a 'YES' => "+isInputYes(input));