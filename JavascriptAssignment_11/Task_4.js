function removeDuplicates(originalArray){

    let duplicateSet = new Set();
    let uniqueSet = new Set();
    for(let i = 0; i < originalArray.length; i++) {
        if(uniqueSet.has(originalArray[i])) {
            duplicateSet.add(originalArray[i]);
        }else{
            uniqueSet.add(originalArray[i]);
        }
    }
    console.log("Duplicate Elements = "+Array.from(duplicateSet));
    console.log("Array without duplicate elements = "+Array.from(uniqueSet));
}

let input = [1,2,3,2,4,5,4,4,2,3,4];

removeDuplicates(input);