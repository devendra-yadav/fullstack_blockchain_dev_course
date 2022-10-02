
function flattenArray(array) {
    for(let i = 0; i < array.length; i++) { 
        let currentElement = array[i];
        if(Array.isArray(currentElement)) { 
            flattenArray(currentElement);
        }else{
            flattenedArray.push(currentElement);
        }
    }

}


let array = [1,2,3,[6,7,5,[2,3],10],23,21];

let flattenedArray =[];
flattenArray(array);

console.log(flattenedArray);