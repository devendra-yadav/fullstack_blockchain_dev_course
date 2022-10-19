
function arrayMatch(input1, input2){
    if(input1.length<input2.length){
        for(let data of input1){
            if(input2.indexOf(data)>=0){
                console.log(`${data} match in both arrays`);
            }
        }
    }else{
        for(let data of input2){
            if(input1.indexOf(data)>=0){
                console.log(`${data} match in both arrays`);
            }
        }
    }
}

let input1 = ["a","b","c","d"];
let input2 = ["e","f","g","h","a","i","j","c"];

arrayMatch(input1,input2);