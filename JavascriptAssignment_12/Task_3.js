
function squareEveryElement(input){
    return input.map((element)=>{
        return element*element;
    });
}

let input = [1,2,3,4,5];
let squares = squareEveryElement(input);
console.log(squares);