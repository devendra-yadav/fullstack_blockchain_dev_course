
/*
Function to print following kind of pattern
1
2 3
4 5 6
7 8 9 10
*/
function printPattern(lastNumber){

    let rowNum=1;
    for(let i=1;i<=lastNumber;){

        for(let j=1;j<=rowNum && i<=lastNumber;j++,i++){
            process.stdout.write(`${i} `);
        }
        console.log("");
        rowNum++;

    }
}

printPattern(10);