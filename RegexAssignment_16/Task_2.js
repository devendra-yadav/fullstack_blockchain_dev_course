function findHappiness(input){
    let regex = /happiness/gmi;
    if(regex.test(input)){
        return "Hurray";
    }else{
        return "There is no happiness.";
    }
}

let input ="You give me feeling of happiness";

let output = findHappiness(input);
console.log(output);
