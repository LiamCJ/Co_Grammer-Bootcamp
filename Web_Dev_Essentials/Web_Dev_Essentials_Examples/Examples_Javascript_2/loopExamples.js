/*To see the output of this code, make sure that this file is opened in Sublime Text and build this code OR
copy and paste this code into Chrome's Developer's Console. 

To see how to configure Sublime Text for debugging and executing JavaScript, please see the FAQs document that accompanies the first JavaScript task.  */

// ============ WHILE CONDITIONAL ============
console.log("Example of a while loop with the format 'while (i < 10)':");
var i = 0;

while (i < 10) {
    console.log("The number is " + i);
    i++;
    if (i < 10) {
        console.log("The value for i is now: " + i);
        console.log("The condtion (i < 10) is, therefore, still TRUE so this loop will run again!");
    } else {
        console.log("The value for i is now: " + i);
        console.log("The condtion (i < 10) is, therefore, FALSE so this loop will now terminate!!");
        console.log("GOODBYE");
    }

}
console.log();

// ============ DO WHILE CONDITIONAL ============
console.log("Example of a do while loop:");
var j = 0;

do {
    console.log("The number is " + j);
    j++;
} while (j < 10);
console.log();

// ============ FOR CONDITIONAL ============
console.log("Example of a for loop 'for (l = 0; l < 5; l++)':");
for (l = 0; l < 5; l++) {
    console.log("The number is " + l);
}
console.log();

//=============NESTED LOOP=====================
/*The following code will output a rectangle of *s.
The dimensions of the rectangle are determined by the variables
numRows (which stores the number of rows that will be printed) and 
numColumns (which stores the number of columns that will be printed) */
var numRows = 5;
var numColumns = 10;
var strRowOutput = "";

for (var row = 1; row <= numRows; row++) {
    for (var column = 1; column <= numColumns; column++) {
        strRowOutput += "*";
    }
    console.log(strRowOutput);
    strRowOutput = "";
}
console.log();

/*The following code will output a rectangle of *s similar to the one created above
BUT instead of having a solid pattern printed, we want to only print the border of the 
rectangle. E.g. output should be 
**********
*        *
*        *
*        *
********** 

instead of 

**********
**********
**********
**********
**********

*/

for (var row = 1; row <= numRows; row++) {
    for (var column = 1; column <= numColumns; column++) {
        if (
            row === 1 ||
            row === numRows ||
            column === 1 ||
            column === numColumns
        ) {
            //Notice how we make use of the OR logical operator here.
            strRowOutput += "*";
        } else {
            strRowOutput += " ";
        }
    }
    console.log(strRowOutput);
    strRowOutput = "";
}
