var nameAvgs = new Map([
    ["Marshall", "F"],
    ["Royce", "C"],
    ["Denuan", "B"],
    ["Deshaun", "A"],
    ["Rakim", "A"]
]);
//the for loop that adds the keys of the map to the select tag as options
for (var [key] of nameAvgs) {
    var stuName = document.createElement("option"); //creates a new option tag
    stuName.text = key; //assigns key to the text of the option tag
    document.getElementById("names").appendChild(stuName); // appends the new option the select tag
}
//function that creates an alert with the grade average of student selected
function Avg() {
    var x = document.getElementById("names").selectedIndex; //gets the index of th student selected
    var y = document.getElementById("names").options;
    //conditional statement that determines what students grade average to display
    if (y[x].text == "Marshall") {
        alert(y[x].text + " Got a Grade of " + nameAvgs.get("Marshall"));
    } else if (y[x].text == "Royce") {
        alert(y[x].text + " Got a Grade of " + nameAvgs.get("Royce"));
    } else if (y[x].text == "Denuan") {
        alert(y[x].text + " Got a Grade of " + nameAvgs.get("Denuan"));
    } else if (y[x].text == "Deshaun") {
        alert(y[x].text + " Got a Grade of " + nameAvgs.get("Deshaun"));
    } else if (y[x].text == "Rakim") {
        alert(y[x].text + " Got a Grade of " + nameAvgs.get("Rakim"));
    }
}