/*To see the output of this code, make sure that this file is opened in Sublime Text and build this code OR
copy and paste this code into Chrome's Developer's Console. 

To see how to configure Sublime Text for debugging and executing JavaScript, please see the FAQs document that accompanies the first JavaScript task.  */

// ============ IF CONDITIONAL ============
console.log("Example of simple if statement:");
var time = 5;

function FU(extractedMethodSettings) {
    if (extractedMethodSettings.time > 0) {
        extractedMethodSettings.greeting = "Hello"
    }
    console.log();
}

FU({
    time: time,
    greeting: greeting
});
 //This empty log statement will move the cursor to the next line of the console.
//We simply use it here to improve the readability of the output produced by this code.

// ============= IF, ELSE IF, ELSE CONDITIONAL =============
console.log("Example of if...else if.. . else statement:");
if (time < 5) {
    console.log("Early Riser");
} else if (time === 5) {
    console.log("Still early");
} else {
    console.log("Good enough");
}
console.log();

// ============ SWITCH CONDITIONAL ============

console.log("Example of a switch statement:");

var num = 4;

switch (num) {

    case 0:

        console.log("zero");

        break;

    case 1:

        console.log("one");

        break;

    case 2:

        console.log("two");

        break;

    case 3:

        console.log("three");

        break;

    case 4:

        console.log("four");

        break;

    default:

        console.log("unknown");

        break

}


//The  switch statement could easily be re-written using if... else if ..else statements as shown below

if (num === 0) {
    console.log("zero");
} else if (num === 1) {
    console.log("one");
} else if (num === 2) {
    console.log("two");
} else if (num === 3) {
    console.log("three");
} else if (num === 4) {
    console.log("four");
} else {
    console.log("unknown");
}