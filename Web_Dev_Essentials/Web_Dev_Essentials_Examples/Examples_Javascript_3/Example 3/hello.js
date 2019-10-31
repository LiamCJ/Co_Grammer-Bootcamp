/*Consider the code below. Here we want the same functionality as used in the previous example.
Instead of just displaying the name and age of one person though, we want to display the information for several people.

We could code this solution as shown below. If you comment out this code, you'll see that this works BUT
a good programmer would look at this and think, "This seems very inefficient! We're just writing the same code over and over again!" */

/*
let name = "Bethany";
let yearOfBirth = 1994;
const thisYear = new Date().getFullYear();
let age = thisYear - yearOfBirth;
alert("Hello World! I'm " + name + " I am " + age + " years old.");

name = "Timothy";
yearOfBirth = 2000;
age = thisYear - yearOfBirth;
alert("Hello World! I'm " + name + " I am " + age + " years old.");

name = "Jack";
yearOfBirth = 1986;
age = thisYear - yearOfBirth;
alert("Hello World! I'm " + name + " I am " + age + " years old.");

name = "Eric";
yearOfBirth = 1991;
age = thisYear - yearOfBirth;
alert("Hello World! I'm " + name + " I am " + age + " years old.");
*/


/*One way to make our code more effiecient is to use functions. As you have read in the PDF, a function is just a block of code.
If you look at the code above, we basically do 2 key tasks: 1)calculate the person's age and then 2) display the message. We can write the functionality 
in a functions that could be reused. For example, we could write a function called 'calculateAge' as shown below. To calculate the age, 
our function needs to know the year in which the person was born. We therefore create a parameter called birthYear. */

function calculateAge(birthYear) {
    const thisYear = (new Date).getFullYear();
    const age = thisYear - birthYear;
    return age;
}

/*We could also create a function called displayMessage that will be passed the name and age
of a person and displays an appropriate message as shown below. */
function displayMessage(name, age){
	alert("Hello World! I'm " + name + " I am " + age + " years old.");
}

/* To execute the code contained in the functions we simply call them as often as we like as shown
below. Notice how we pass different values to the function each time. */
displayMessage("Bethany", calculateAge(1994));
displayMessage("Timothy", calculateAge(2000));
displayMessage("Jack", calculateAge(1986));
displayMessage("Eric", calculateAge(1991));

/*Compare the code we have written here to the code in the comment. Do you see that both pieces of code
do the same task but using functions is more effective because we only write the logic for each task once? */