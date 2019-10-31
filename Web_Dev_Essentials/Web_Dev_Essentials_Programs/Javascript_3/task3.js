//function that displays an alert with the name that the user enters
function wel() { //
    var fNme = document.getElementById("Fname").value; //[lines 3,4,13,19,25,54,57,61,63,67] assign the value of the input to variabes
    var lNme = document.getElementById("Lname").value;
    alert("Welcome " + fNme + " " + lNme) //creates an alert with the users first and last name
}
//function that counts the amount of times a button is clicked
var nCount = 0;

function count() {
    nCount++; //when the button is clicked the variable is incremented 
    document.getElementById("dis").innerHTML = "You clicked he button " + nCount + " time(s)"; //displays the amount of times the button is clicked
}
//this function converts rands to dollars
function conD() { //
    var rns = document.getElementById("rands").value;
    var dols = rns * 0.062; //converts rands to dollars
    document.getElementById("dollar").innerHTML = "$" + dols; //[lines 11,17,23,29] assigns new content to tags such as paragraphs and labels 
}
//this function converts rands to euros
function conE() {
    var rns = document.getElementById("rands").value;
    var euro = rns * 0.062; //converts rands to euros
    document.getElementById("euros").innerHTML = "€" + euro;
}
//this function converts rands to pounds
function conP() {
    var rns = document.getElementById("rands").value;
    var pnds = rns * 0.055; //converts rands to pounds
    document.getElementById("pounds").innerHTML = "£" + pnds;
}

function pos() { //
    var x = document.getElementById("opt").selectedIndex;
    var y = document.getElementById("opt").options;
    var nOpt = parseInt(y[x].index + 1)
    document.getElementById("index").innerHTML = y[x].text + " Is Option " + nOpt;
}
var drop = document.getElementById("drop");

//an array that contains the options for the dropdown
var array = ["1. Albania", "2. Algeria", "3. Andorra", "4. Angola", "5. Antigua", "6. Argentina", "7. Armenia", "8. Australia", "9. Austria", "10. Azerbaijan", "11. Bahrain", "12. Bangladesh", "13. Barbados", "14. Belarus", "15. Belgium", "16. Belize", "17. Benin", "18. Bhutan", "19. Bolivia", "20. Bosnia", "21. Botswana", "22. Brazil", "23. Brunei", "24. Bulgaria", "25. Japan"];

//Create and append select list
var selectList = document.createElement("select"); //creates the select tag which is the parent of the option tag
selectList.id = "opt"; // assigning the select tag an id in order for the enter button to display the options position
drop.appendChild(selectList); //makes the select tag the child of the div

//the for loop appends each item in the array to the option tag which is the child of the select tag, the loop will continue for th length of the array
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option"); //creates the option tag for the item
    option.text = array[i]; //makes the text of the option one of the items in the array 
    selectList.appendChild(option); //makes the new option tag a child of the select tag
}
//the function thats adds value to the text input when a button on the calculator is pressed
function Ent(val) {
    document.getElementById("display").value += val //adds the value of a button to the val to the text input which acts as a display screen
}
//the function that calculates the equation that is entered by the user
function Ans() {
    var x = document.getElementById("display").value
    var y = eval(x) //evaluates the value of the text input and calculates the content to receive a answer
    document.getElementById("display").value = y //the answer of the equation is displayed on the text input
}
//the function clears the content of the text input
function clr() {
    document.getElementById("display").value = "" //when the clear button is clicked the value of the text input is changed to nothing
}