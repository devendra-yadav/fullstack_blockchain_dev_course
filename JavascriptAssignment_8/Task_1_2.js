/*
1. Can we put duplicate values in the set object ?
ANS: We CAN NOT put duplicate values in the set object.
    example below: 
*/  
    let set = new Set();    
    set.add("one");
    set.add("one");
    console.log(set); //Only 1 element present in set.

/*
2. Write the syntax for
    a) Creating new set object
*/
    let newSet = new Set();
    
/*
    b) Adding new element to set object
*/
    newSet.add("one");
    newSet.add("two");
    newSet.add("three");
    console.log(newSet);

/*
    c) Deleting element from set object
*/
    newSet.delete("one");
    console.log(newSet);