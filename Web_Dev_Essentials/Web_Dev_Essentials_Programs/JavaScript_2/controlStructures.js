//number variables that I will be referencing as varnums
var num1 = 2;
var num2 = 4;
var num3 = 6;
//conditional statement to determine the biggest number 
if (num1 > num2) { //if [num1] is bigger than [num2] line 7 takes place, or else line 9 takes place
    console.log(num1); //displays the value [num1]
} else {
    console.log(num2); //displays the value [num2]
}
//function named [check] in order to check if num1 is even or odd
function check() {
    if (num1 % 2 == 0) { //if [num1] divided into 2 with no remainders line 14 takes place, or else  line 16 takes place
        return (num1 + " is an even number"); //displays that [num1] is even
    } else {
        return (num1 + " is an odd number"); //displays that [num2] is even
    }
}
console.log(check());
//conditional statements to order 3 numbers from largest to smallest
if (num1 > num2 && num1 > num3) { //if [num1] is bigger than both [num2] and [num3] lines 22-25 will take place
    if (num2 > num3) { //if [num2] is bigger than [num3] line 23 will take place, or else line 25 will take place
        console.log(num1, num2, num3); //displays the varnums in order of [num1],[num2],[num3]
    } else {
        console.log(num1, num3, num2); //displays the varnums in order of [num1],[num3],[num2]
    }
} else if (num2 > num1 && num2 > num3) { //if [num2] is bigger than both [num1] and [num3] lines 28-31 will take place
    if (num1 > num3) { //if [num1] is bigger than [num2] line 29 will take place, or else line 31 will take place
        console.log(num2, num1, num3); //displays the varnums in order of [num2],[num1],[num3]
    } else {
        console.log(num2, num3, num1); //displays the varnums in order of [num2],[num3],[num1]
    }
} else if (num3 > num1 && num3 > num2) { //if [num3] is bigger than both [num1] and [num2] lines 34-37 will take place
    if (num1 > num2) { //if [num1] is bigger than [num3] line 35 will take place, or else line 37 will take place
        console.log(num3, num1, num2); //displays the varnums in order of [num3],[num1],[num2]
    } else {
        console.log(num3, num2, num1); //displays the varnums in order of [num3],[num2],[num1]
    }

}
//for loop to display numbers 1 to 20
for (x = 1; x <= 20; ++x) { //the variable [x] is made and is incremented,the loop will continue as long as [x] is smaller or equal to 20 while line 43 takes place
    console.log(x); //displays the value of [x]
}
//
var x = 1;
do {
    console.log(x); //displays the value of [x]
    ++x; //increments [x]
} while (x <= 20) //the loop will continue as long as [x] is smaller or equal to 20 while lines 48-49 takes place
//the function that displays even numbers between 1 and 20
function even() {
    for (x = 1; x <= 20; ++x) { //the variable [x] is made and is incremented,the loop will continue as long as [x] is smaller or equal to 20 while lines 54-55 takes place
        if (x % 2 == 0) { //if [x] divided into 2 with no remainders line 55 takes place
            console.log(x); //displays the value of [x] 
        }
    }
}
even() //call the function [even()]
var noRows = 5; //[noRows is short for no. of rows]
var output = "" //null variable
function pyra() {
    for (Rcount = 1; Rcount <= noRows; Rcount++) { //[Rcount is short for row count]the variable [Rcount] is made and is incremented,the loop will continue as long as [Rcount] is smaller or equal to [noRows] while lines 64-68 takes place
        for (nOuts = 1; nOuts <= Rcount; nOuts++) { //nOuts is short for no. of outputs]the variable [nOuts] is made and is incremented,the loop will continue as long as [nOuts] is smaller or equal to [Rcount] while lines 65 takes place
            output += "*"; //adds *'s to [output] the amount of *'s depend on how many times line 64 repeats
        }
        console.log(output); //displays the value of output
        output = "" //resets output so that line 65 can take place
    }
}
pyra() //call the function [pyra() which is short for pyramid]
//function that determines the greatest common divisor
function gcd(x, y) {
    if (x == 0) { //if [x] is equal to zero line 75 will take place
        return (y); //gcd() will return [y] if [x] is equal to zero
    }
    while (y != 0) { //the loop will continue as long as [y] is not equal to zero
        if (x > y) { //if+ [x] is greater than [y] line 79 will take place, or else line 81 will take place
            x = x - y; //[y] will be deducted from [x] until [x] is smaller than [y] then line 81 will take place in order to determine the greatest common divisor  
        } else {
            y = y - x; //[x] will be deducted from [y]
        }
    }
    return (x); //gcd() will return [x] if [y] is equal to zero
}
console.log(gcd(48, 18)) //displays the greatest common divisor of [x] and [y]