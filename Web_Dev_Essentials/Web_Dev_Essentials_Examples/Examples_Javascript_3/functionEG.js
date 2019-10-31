/*This is a basic example of a function in JavaScript. This function isn't linked to any HTML at the 
moment. To execute this code, build this file. (Tools>Build or Ctrl+B)*/

//Below we declare a function called doubleNumber
function doubleNumber(number) {
    return number * 2;
}

//Remember that the code inside the function isn't executed until the function is called.

/*Below we call the function 3 times. Each time the function is called in a console.log statement.
Think of a call to the function (e.g. ‘doubleNumber(10)’), as a 'placeholder' for some computation. 
The function will go off and run its code and return its result in that place.
For the line below therefore, the following happens:
1. When the code is executed, the compiler see the statement console.log(), it therefore knows it needs to write something
to the console. It will write whatever argument is passed to it between the brackets to the console. Since the value in the brackets is a function call, 
2. the function called ‘doubleNumber’ is called is passed the value 10 as an argument to that function. 
3. Since we created a parameter called ‘number’ when we defined the function ‘doubleNumber’, passing the argument 10 to the 
function ‘doubleNumber’ will result in the parameter ‘number’ being assigned the value 10.  
4. The function ‘doubleNumber’ is then executed and the result of the statements in the function (return number * 2;) are returned.
5. The returned value is passed as an argument to console.log and the resulting value is displayed. */
console.log(doubleNumber(10));
console.log(doubleNumber(3));
console.log(doubleNumber(234239573));
