
function checkPresenceOf4(array1, array2) {

    let index1 = array1.indexOf(4);
    let index2 = array2.indexOf(4);

    if(index1>=0 && index2>=0){
        console.log("4 in both arrays");
    }else{
        if(index1 >= 0){
            console.log("4 in array 1");
        }else if(index2 >=0){
            console.log("4 in array 2");
        }else{
            console.log("4 is not in any array");
        }
    }

}

let input1 = [2,3,6,8];
let input2 = [9,4,6,8];

checkPresenceOf4(input1, input2);
