//In JavaScript this is a comment. A comment will be ignored by the interpreter.
//Start all single-line comments with //
/* If you want to add a long comment that spans across several lines,
then you would use a multi-line comment. As you can see, a multi-line
comment starts with a /* and ends with */

/*See what the output of the code below is by:
1. Following the instruction in "Debugging and executing JavaScript - FAQs" that allow
you to build JavaScript files in Sublime.
or
2. Copying and pasting everthing in this file
into the JavaScript console. To open the console, open Chrome and then press
 either Ctrl+Shift+J if you are using Windows / Linux or Cmd+Opt+J if you are
using Mac. */

// ============ DATA TYPES ============
var num = 12;

var num2 = 12.42;

var strName = "Bob";

var myWords = ["hi", "there"];

var myObject = {color: "blue", time: "8pm"};

// ============= TYPE IDENTIFICATION =============

console.log("num is a " + typeof num + " with a value of " + num);

console.log("num2 is a " + typeof num2 + " with a value of " + num2);

console.log("strName is a " + typeof strName + " with a value of " + strName);

console.log("myObject is a " + typeof myObject + " with a value of " + myObject);

console.log("myWords is a " + typeof myWords + " with a value of " + myWords);

//=============== BASIC MATHS WITH VARIABLES================

var difference = num2 - num;
console.log("num2 - num = " + difference);

console.log("The area of a square with the width of " + num + " is " + num*num);

console.log("The radius of a circle with the radius of " + num + " is " + num*Math.PI);

console.log(num + " cubed is " + num*num*num);



