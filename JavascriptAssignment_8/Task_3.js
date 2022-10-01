
function is8PresentInRandomSet(){
    let set = new Set();
    for(let i=0;i<4;i++){

        let randomNum=Math.ceil(Math.random()*10);
        //this loop is to make sure that if random number is already present then get another random number.
        while(set.has(randomNum)){
            randomNum=Math.ceil(Math.random()*10);
        }
        set.add(randomNum);
        
    }
    console.log(set);
    if(set.has(8)){
        return true;
    }else{
        return false;
    }
}

console.log(is8PresentInRandomSet());