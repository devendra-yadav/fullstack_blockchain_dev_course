
// \D : non digit
// \d : digit 
let regex=/\D\d\d:\d\d\D/gm;

let input1 = "Lunch at 10:10 in the room";
let input2 = "Lunch at 210:210 in the room";
let input3 = "Lunch at 1:10 in the room";
let input4 = "Lunch at 10:1 in the room";
let input5 = "Lunch at 1:1 in the room";
let input6 = "Lunch at aa:vv in the room";

console.log(`${input1} => ${regex.test(input1)}`);
console.log(`${input2} => ${regex.test(input2)}`);
console.log(`${input3} => ${regex.test(input3)}`);
console.log(`${input4} => ${regex.test(input4)}`);
console.log(`${input5} => ${regex.test(input5)}`);
console.log(`${input6} => ${regex.test(input6)}`);