
function matchHouse(step){
    let matchHouseUnitSticks=6;

    let totalMatchHouseStickCount = (matchHouseUnitSticks * step) - (step -1);

    return totalMatchHouseStickCount;

}

console.log(matchHouse(1));
console.log(matchHouse(2));
console.log(matchHouse(3));
console.log(matchHouse(4));
console.log(matchHouse(87));
