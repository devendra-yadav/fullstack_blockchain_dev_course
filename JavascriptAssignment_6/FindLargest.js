
let array = [3,45,6,7,23,5,7,8];


const numberSort = function sort(a, b){
    return a-b;
}

function find_largest(n){
    let sortedArray = array.sort(numberSort).reverse();
    
    return sortedArray[n-1];
}

let nthLargest = find_largest(3);
console.log(nthLargest);