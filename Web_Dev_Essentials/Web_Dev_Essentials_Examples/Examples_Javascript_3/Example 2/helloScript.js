/*In this example, we write the JavaScript in a separate .js file
instead of in the <script> tags of the HTML page. See example2.html
to see how we link to this file. */

/* This code does more or less the same as the code in example.html. Notice that again we declare variables called name and age.
This time we also have 2 additional variable though: yearOfBith and thisYear. 
We use a predefined method called Date().getFullYear() to get the current year. This method
gets the year from your computer's date and time settings. See more about this method here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

We then calculate how old a person is by subtracting the year they were born in from the current year. */

const name = "Bethany";
const yearOfBirth = 1994;
const thisYear = new Date().getFullYear();
const age = thisYear - yearOfBirth;
alert("Hello World! I'm " + name + " I am " + age + " years old.");