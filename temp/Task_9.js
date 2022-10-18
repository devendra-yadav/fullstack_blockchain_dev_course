function sevenBoom(input){

    let out=input.find((num)=>{
        if(num===7){
            return true;
        }
    })
    
    if(out!=null){
        return "Boom!";
    }else{
        return "there is no 7 in the array";
    }
}

console.log(sevenBoom([1,2,3,4,7,5,6,17,8]));
console.log(sevenBoom([1,17,8,1,2]));
console.log(sevenBoom([1,2,3,4,17,5,6]));