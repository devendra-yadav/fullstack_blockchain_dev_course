
let myIterator = (arr)=>{
    let count =0;
    
    function next(){
        if(count>=arr.length){
            return null;
        }else{
            let value=arr[count];
            count++;
            return value;
        }
    }

    return {
        next
    }
}


let input = ["Java","C","C++","Solidity","JavaScript"];
let iter = myIterator(input);

let data = iter.next();
while(data!=null){
    console.log(data);
    data = iter.next();
}
