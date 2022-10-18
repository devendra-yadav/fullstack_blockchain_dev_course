function XO(input){
    const regexX=/x/gi;
    let xArray=input.match(regexX);
    
    const regexO=/o/gi;
    let oArray=input.match(regexO);
    
    if(xArray.length===oArray.length){
        return true;
    }else{
        return false;
    }

}

console.log(XO("xxoo"));
console.log(XO("xXoo"));
console.log(XO("xooxx"));
console.log(XO("xXxoxooOAbcde"));