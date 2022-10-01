/*
5. What string method can be used to convert string into array ?
ANS: We can use split() method to convert string into array: -
     split("<separater>") : this method will split the string into array with "<separater>" as separator.
     example below: we are splitting the input string using ":" as separator.
*/ 
    let input = "name:age:city";
    let inputArr = input.split(":");
    console.log(input + " => " + inputArr);



/*
6. What string method can be used to check the occurrence of a specified
text in a string?
ANS: We can use indexOf() method to check the occurrence of a specified text.
    eample below:
*/
    input = "hello world, welcome to blockchain world!";
    let index = input.indexOf("world");
    console.log("Index of 'world' in '"+input+"' => " + index);


/*
7. How can you break a string to a newline in Javascript ?
ANS : We can use "\n" to break a string to a newline.
    example below:
*/
    console.log("Hello world!. \n Welcome to Blockchain course.");

