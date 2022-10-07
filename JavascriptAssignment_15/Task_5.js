function changeEnough(changes, dueAmount){
    let quarter = changes[0] * 0.25;
    let dime = changes[1] * 0.1;
    let nickel = changes[2] * 0.05;
    let penny = changes[3] * 0.01;
    let totalAmount = quarter + dime + nickel + penny;
    
    return totalAmount>=dueAmount;

}

let changes = [30, 40, 20, 5];
let dueAmount = 12.55;

console.log(changeEnough(changes, dueAmount));