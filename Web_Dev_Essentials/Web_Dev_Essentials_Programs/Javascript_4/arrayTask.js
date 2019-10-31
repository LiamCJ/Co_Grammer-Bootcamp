var langs = ["Java", "C++", "C#", "C", "SQL", "Python"];
//a for loop that repeats for the length of the list [langs] and makes each item inside of [langs] a list item
for (index = 0; index < langs.length; index++) {
    var item = document.createElement("li"); //creates a new element which is a list item tag
    var lan = document.createTextNode(langs[index]); //makes the item in [langs] a text
    item.appendChild(lan); //appends the text of [lan] to the new list item tag
    document.getElementById("favLanguages").appendChild(item); //appends the list item to an unordered list with the id "favLanguages"
}

var myJSTestResults = [40, 60, 80, 85, 90];
var total = 0;
//a for loop that repeats for the length of [myJSTestResults] that calculates the total of the contents of [myJSTestResults]
for (count = 0; count < myJSTestResults.length; count++) {
    total += myJSTestResults[count]; //increases the value of [total] by the value of the item in [myJSTestResults]
}
var Average = total / 5;
//a conditional statement that determines the grade of [Average]
if (Average <= 49) { //if the average is equal to or less than 49% the grade is F
    document.getElementById("myGrades").innerHTML = "My grade is F";
} else if (50 <= Average && Average <= 59) { //if the average is greater than or equal to 50 and less than or equal to 59 the grade is D
    document.getElementById("myGrades").innerHTML = "My grade is D";
} else if (60 <= Average && Average <= 69) { //if the average is greater than or equal to 60 and less than or equal to 69 the grade is C
    document.getElementById("myGrades").innerHTML = "My grade is C";
} else if (70 <= Average && Average <= 79) { //if the average is greater than or equal to 70 and less than or equal to 79 the grade is B
    document.getElementById("myGrades").innerHTML = "My grade is B";
} else if (80 <= Average && Average <= 100) { //if the average is greater than or equal to 80 and less than or equal to 100 the grade is A
    document.getElementById("myGrades").innerHTML = "My grade is A";
}