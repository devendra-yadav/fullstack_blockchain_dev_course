function nextEdge(side1, side2) {

    return (side1+side2 -1);
}

let side1 = 10;
let side2 = 5;

let side3 = nextEdge(side1, side2);
console.log(`side1: ${side1}, side2: ${side2}. Max range for side3: ${side3}`);