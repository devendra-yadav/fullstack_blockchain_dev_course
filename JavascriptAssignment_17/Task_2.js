
//Iterate over each char of a string
function iterate(input){

    let iter = input.split("")[Symbol.iterator]();

    let data = iter.next();
    while(!data.done){
        console.log(data.value);
        data = iter.next();
    }


}

let input = "iNeuron";
iterate(input);