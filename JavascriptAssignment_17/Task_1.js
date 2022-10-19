
//iterate over input array
function iterate(inputArr){
    let iter = inputArr[Symbol.iterator]();
    
    let data=iter.next();
    while(!data.done){
        console.log(data.value);
        data = iter.next();
    }

}

let input = ["John", "Rohn", "Danny", "James"];
iterate(input);
