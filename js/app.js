console.log('you are hearing me talk');

const logit = function(output1) {
    console.log(output1);
}

// What is the difference between a parameter and an argument?
// the parameters are the names of the value(s) that will be passed into a function
// whereas the arguments are the actual values
// e.g.
// the area of a square is length x width
// "length" and "width" are the parameters
// if we have a specific square of 3'x5', 3 and 5 are the arguments


// Within a function, what is the difference between return and console.log?
//console log prints something to the console
//"return" stops the function and also returns a value/objects/something AS the value of the function
//so if fxn() returns 5, then let x = 3 + fxn(); would set x = 8.

// What are the implications of the ability of a function to return a value?
// i sort of answered this just above?
// but anyway it means a function doesn't just DO something, it actually IS something, or EVALUATES TO something in the code.  This i guess makes it a lot easier to nest functions within functions and have multi-layer code that builds on itself in complexity.  Or something like that.



//part 2

const checkPalindrome = function(string1) { 
    array1 = string1.toLowerCase().split("");
    array2 = string1.toLowerCase().split("").reverse();
    //output1 = array1 == array2; why doesn't this work??  no clue!!
    restore1 = array1.join("");
    restore2 = array2.join("");
    output2 = restore1 == restore2;
    //return output1;
    return output2;
}
logit(checkPalindrome('Radar'));
logit(checkPalindrome("Borscht"));




//part 3

