
//functin to check type of triangle (Scalene, Isosceles, Equilateral)
function getTriangleType(side1, side2, side3){
    if(side1 === side2 && side2 === side3){
        return "Equilateral";
    }else if(side1 === side2 || side2 === side3 || side1 === side3){
        return "Isosceles";
    }else{
        return "Scalene";
    }
}

let side1 = 3;
let side2 = 4;
let side3 = 5;

console.log(`Triangle having side lengths as ${side1}, ${side2} and ${side3} is a '${getTriangleType(side1, side2, side3)}' triangle.`);