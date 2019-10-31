var car = {
        brand:"Porsche",
        model:"GT3",
        year:2004, 
        colour:"White",
        howOld:function(){getFullYear() - this.year;}
};
/*Above we have created a car object with properties (brand, model, year and colour)
and a method (howOld). */

function print()
{
	alert(JSON.stringify(car)); //Note that JSON.stringify is used to display the contents of the object properties - useful for your tasks!
}

function promptMe()
{
	var input = prompt("What is your favourite food?");//Notice how you can receive input from a user using the prompt method
	alert("Your favourite food is: " + input + " (good choice!)"); //This will also be useful for your tasks
}

/* Below we create an empty object called loaded. We then add a method called 
testing to the object. Finally we call the method (testing) so that the code in
this method is executed. */
var loaded = {};
loaded.testing = function(signal) {
	alert("Hello World! " + signal);
	loaded.signal = signal;
}
loaded.testing("This page has loaded!");
