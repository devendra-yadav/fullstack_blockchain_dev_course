//Function to check if the given year is a leap year or not.
function isLeapYear(year){

    if(year%400 === 0){
        return true;
    }else if(year%100 === 0){
        return false;
    }else if(year%4 === 0){
        return true;
    }else{
        return false;
    }
}

let years=[1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600,1600, 2000, 2400, 1992, 1996, 2000, 2008, 1993, 1997];

for(let i=0;i<years.length;i++){
    console.log(`Is ${years[i]} a leap year : ${isLeapYear(years[i])}`);
}