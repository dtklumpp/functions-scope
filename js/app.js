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
logit("part 2");
logit(checkPalindrome('Radar'));
logit(checkPalindrome("Borscht"));




//part 3

const sumDigits = function(num1) {
    string1 = num1.toString();
    array1 = string1.split("");
    sumArray = [];
    for(let i = 0; i<array1.length; i++){
        sumArray.push(Number(array1[i]));
    }
    sumVal = 0;
    for(let i =0; i<sumArray.length; i++){
        sumVal += sumArray[i];
    }
    return sumVal;
}
logit("part3");
console.log(sumDigits(1542));


//part 4

const calculateSide = function(sideA, sideB) {
    output1 = Math.sqrt( sideA**2 + sideB**2 );
    return output1;
}
logit("part4");
logit(calculateSide(8,6));



//part 5

const sumArray1 = function(array1) {
    sumVar = 0;
    for(let i = 0; i < array1.length; i++){
        sumVar += array1[i];
    }
    return sumVar;
}
logit("part5");
logit(sumArray1([1, 2, 3, 4, 5, 6]));


//part 6
const checkPrime = function(int1) {
    root1 = Math.floor(Math.sqrt(int1));
    for(let i = 2; i <= root1; i++){
        if((int1/i) === Math.floor(int1/i)){
            return false;
        }
    }
    return true;
}
logit('part 6');
logit(checkPrime(17));
logit(checkPrime(18));
logit(checkPrime(15));

//part 6 v2

const printPrimes = function(num1) {
    logit(2);
    logit(3);
    for(let i = 4; i <= num1; i++) {
        if(checkPrime(i)){logit(i)};
    }
}
logit('part 6 v2');
logit(printPrimes(10));
logit(printPrimes(100));








//hungry 1 did the lab
//the labs seems harder than the HW...

//hungry 2 not so bad

//hungry 3 use pop and push for string
//so .length and [] work strings
//so can string[string.length] to get last char
//could always put in array i guess
//then just loop array to make a string??
//how can make a string if immutable?
//well you can concatenate
//ok yeah so concat with a loop....how annoying..

//hungry 4 remove spaces, uncapitalize

//hungry 5 check for just letters i guess

//hungry 6 hmm maybe insert special character when break char
//then remove everything but letters and that
//then split into array by break char

