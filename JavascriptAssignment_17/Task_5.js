
//for of
function arrayIterat1(input){
    for(let data of input){
        console.log(data);
    }
}

//foreach
function arrayIterat2(input){
    input.forEach((element) => {
        console.log(element);
    });
}

//iterator
function arrayIterat3(input){
    let iter = input[Symbol.iterator]();
    let data = iter.next();
    while(!data.done){
        console.log(data.value);
        data = iter.next();
    }
}

//normal for loop
function arrayIterat4(input){
    for(let i=0;i<input.length;i++){
        console.log(input[i]);
    }
}

//for in
function arrayIterat5(input){
    for(let data in input){
        console.log(input[data]);
    }
}

function arrayIterat6(input){
    
}

let input = ["C","C++","Java","Javascript"];
console.log("Using for of");
console.log("-----------");
arrayIterat1(input);
console.log("\nUsing for each");
console.log("-----------");
arrayIterat2(input);
console.log("\nUsing iterator");
console.log("-----------");
arrayIterat3(input);
console.log("\nusing normal for loop");
console.log("-----------");
arrayIterat4(input);
console.log("\nUsing for in");
console.log("-----------");
arrayIterat5(input);
