/*To see the output of this code, make sure that this file is opened in Sublime Text and build this code OR
copy and paste this code into Chrome's Developer's Console. 

To see how to configure Sublime Text for debugging and executing JavaScript, please see the FAQs document that accompanies the first JavaScript task.  */

/*In the example below, we have two arrays that store data about a class of students 
studying JavaScript. The array "jsStudents" contains the names of the students in the class.
The array "jsGrades" stores the marks for these students. 

Remember that an array is just a data type that stores many items instead of a single item. 
Each item in the array is referred to as an element. Each element is assigned an index. In the 
example below "Tom" is put in index 0 of the array jsStudents. "Sue" is in index 1, "Joe" is in index 2 etc.
The first index in an array is always 0. */ 
var jsGrades = [80, 75, 60, 90, 100, 76]; //Here we declare and assign values to jsGrades. Remember, when we declare a variable
//a space is created in memory to store the values assigned to that variable. An array creates enough space in memory to store all the values 
//assigned to it in the square brackets on the right-hand side of the assignment operator =.
var jsStudents = ["Tom", "Sue", "Joe", "Alice", "Jack", "Jason"];//Declare jsStudents and assign values to it.

/*We can either access the whole array at once OR access single elements of the array.
Here's an example of using the whole array */
console.log(jsStudents);
//And below is an example of how we would access a single element in the array. We do so by using the index that the element is in
//to identify the specific element we are referring to. The index is indicated in square brackets. E.g.:
console.log("The student at index 0 of jsStudents is " + jsStudents[0]);
//What is the name of the student in index 4 of jsStudents? Uncomment the code below and execute the code to
//see if you are correct
//console.log(jsStudents[4]);

/*If we try to access an element in an array that doesn't exist (e.g. if we try to get
an element at index 100 out of an array that only has 10 elements assigned) the value "undefined" is returned.
This is because we are trying to access an element that we haven't assigned a value.
Trying to access an element with an index that is out of bounds is a very common error that you should watch out for. */
console.log("The student at index 100 of jsStudents is " + jsStudents[100]);

/*If we wanted to write out the names of all the students in jsStudents, it would be
very tedious and time-consuming to write the code for each individual element as we have done above. Instead, we can
use a loop to loop through each element in the array. If we know how many elements are in an array
it will be easy to write a for loop that will loop through each element. With arrays, we can use a 
function called length to see how many elements are in a given array. See below how we use the length function
to see how many elements are in the array "jsGrades" */
var arrayLength = jsGrades.length;
console.log("jsGrades is an array with " + arrayLength + " grades in it.");
console.log();

/*Below we create a for loop that will loop from 0 through all the indices of the array.
Assume that whoever wrote this code wanted the grades in the jsGrades array to correspond to the students in 
jsStudents. We know that the grade at a certain index in jsGrades will, therefore, belong to the student at the corresponding
index of jsStudents (i.e. jsGrades[x] belongs to jsStudents[x]). See how we use the loop below to write out which grade belongs to which student: */
for (var i = 0; i < arrayLength; i++) {
  console.log(jsStudents[i] + " scored a grade of " + jsGrades[i] + "% in JavaScript");
}
console.log();

/*Besides the loops that we have covered in this task, we can also use a for...of loop. This type of 
loop can be used to loop through each element in an array. The syntax of this loop is shown below. */
console.log("List of grades printed using for..of loop:");
for (let value of jsGrades) {
  console.log(value);
}

/*We can also use the forEach method to iterate through all the elements in an array as shown below. */
console.log("List of grades printed using forEach:");
jsGrades.forEach(function(value) {
      console.log(value);
    });

/*See an example below of how we can loop through an array and calculate the sum of the elements in the array */
var sum = 0;
for (let value of jsGrades) {
  sum += value;
}
console.log("The result of adding all the elements in jsGrades is " + sum);

/*we could accomplish the same thing using a for loop as shown below*/
sum = 0;
for (var i = 0; i < arrayLength; i++) {
  sum += jsGrades[i];
}
console.log("The result of adding all the elements in jsGrades using a for loop is " + sum);