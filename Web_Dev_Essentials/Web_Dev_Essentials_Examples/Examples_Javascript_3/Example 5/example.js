/* In this example we again use an external script file that contains multiple functions.
Unlike the previous example, these functions aren't called within this JavaScript file, rather
they are called when an event is triggered. See example3.html to see where these functions are called.

This example also shows how we use the built-in methods getElementbyId, createElement and appendChild for manipulating
out HTML page. */

/* This is similar to the function we created in example 1 and 2. However, the function isn't called in this JavaScript file
as before but in the HTML page when the form is submitted. Also notice that instead of hardcoding
values for the variables name and yearOfBirth, we get the values from the data that the user enters into our HTML form.*/
function displayWelcome() {
    const name = document.getElementById("userName").value;
     /* Let's examine the statement above: the instruction  document.getElementById("userName")
    finds an element in the html page (example3.html) called userName. If you examine example3.html
    you will notice that this is a <input> element. 
    We use .value to get the value that the user has enetered into this input element and then store that value into
    a variable called name. */
    const yearOfBirth = document.getElementById("yearOfBirth").value;
    const thisYear = new Date().getFullYear();
    const age = thisYear - yearOfBirth;
    alert("Hello World! I'm " + name + " I am " + age + " years old.");
}

function changeText() {
    document.getElementById("pChangeText").innerHTML = "Hello JavaScript";
    /* Let's examine the statement above: the instruction  document.getElementById("pChangeText")
    finds an element in the html page (example3.html) called pChangeText. If you examine example3.html
    you will notice that this is a <p> element. 
    The instruction innerHTML = "Hello JavaScript"; then changes the value within the <p> element from 
    whatever it was before to "Hello JavaScript"
    See more about innerHTML here: https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML */
}

function changeStyle() {
    document.getElementById("style").style.fontSize = "40px";
    /*The code above finds the element where id="style" and changes the fontSize property of the style 
    attribute for that element to 40px. */
}

function showTime() {
    document.getElementById("time").innerHTML = Date();
    /*The code above finds the element where id="time" and changes the innerHTML to the current date and time. */
}

function closeDoc() {
    alert("You are closing this page!");
    window.close();
}

function addListOfLanguages() {
    /*See the querySelector method below. getElementById finds an element in the HTML page with a specific ID.
    The querySelector method, on the other hand, finds the first Element within the document that matches the specified selector, or group of selectors.
    For more info about this methos see here:https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
    The code below, therefore, finds an ordered list <ol> element.
    We store a reference to the <ol> element that is found in a variable called htmList. */
    let htmlList = document.querySelector("ol");
    /* We want to add listItems <li> to the ordered list element that we found above. To do this,
    we first have to create a list item. Notice how an element can be created below using the createElement method. 
    Here we create 4 <li> elements. */
    let listItem1 = document.createElement('li');
    let listItem2 = document.createElement('li');
    let listItem3 = document.createElement('li');
    let listItem4 = document.createElement('li');

    /*Once we have create the <li> elements, we set the innerHTML for each element and then use the 
    appendChild method to add each <li> element to the <ol> element that we found before that we 
    stored in a variable called htmlList. */
    listItem1.innerHTML = "JavaScript";
    htmlList.appendChild(listItem1);
    listItem2.innerHTML = "HTML";
    htmlList.appendChild(listItem2);
    listItem3.innerHTML = "CSS";
    htmlList.appendChild(listItem3);
    listItem4.innerHTML = "C#";
    htmlList.appendChild(listItem4);
}