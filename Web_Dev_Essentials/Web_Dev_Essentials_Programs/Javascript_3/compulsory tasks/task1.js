alert("Welcome")
//The function that enables the button [in line 11 of the html file] to change the size of the heading when clicked
function hSize() { //hsize is short for header size
    document.getElementById("header").style.fontSize = "smaller";
}
//The function that enables the button [in line 13 of the html file] to change the font of the paragraph when clicked
function pFont() { //pFont is short for paragraph font
    document.getElementById("p1").style.fontStyle = "italic";
}
//The function that enables the button [in line 15 of the html file] to highlight the paragraph when clicked
function hPar() { //hPar is short for highlight paragraph
    document.getElementById("p2").style.backgroundColor = "#C0C0C0"; //[lines 12,16,20,24,28] use "document.getElementById().style.backgroundColor" in order to change the background colors of paragraphs
}
//The function that makes the background of the paragraph 1 gray once the cursor is moved om it
function parOn() { //parOn is short for paragraph on
    document.getElementById("p1").style.backgroundColor = "#C0C0C0";
}
//The function that makes the background of the paragraph 1 transparent once the cursor is moved away
function parOff() { //parOff is short for paragraph off
    document.getElementById("p1").style.backgroundColor = "transparent";
}
//The function that makes the background of the paragraph 2 gray once the cursor is moved om it
function parOn2() { //parOn2 is short for paragraph on2
    document.getElementById("p2").style.backgroundColor = "#C0C0C0";
}
//The function that makes the background of the paragraph 2 transparent once the cursor is moved away
function parOff2() { //parOff2 is short for paragraph off2
    document.getElementById("p2").style.backgroundColor = "transparent";
}
//The function that hides the content of the div tag which has the id of "hide", the content being an image
function hImg() { //hImg is short for hide image
    funV = document.getElementById("hide");
    if (funV.style.display == "none") {
        funV.style.display = "block";
    } else {
        funV.style.display = "none"
    }
}
//The function that enables the button [in line 23 of the html file] to  change the image
function chImg() { //chImg is short for change image
   var image = document.getElementById('img2');    
    if (image.src.match("Task1img3")) { // "document.getElementById().src.match" checks if there are any matching text inside the src of the image
        image.src = "Task1Images/Task1img2.jpg"; //[lines 42,43,45,50,54] "document.getElementById().src" in order to change the image by change the source the image comes from
    } else {
        image.src = "Task1Images/Task1img3.jpg";
    }
}
//The function that changes the image when the mouse cursor is on it
function imgOn() { //imgOn is short for image on
    document.getElementById("img2").src = "Task1Images/Task1img3.jpg";;
}
//The function that returns the image to the original after the cursor has moved away
function imgOff() { //imgOff is short for image off
    document.getElementById("img2").src = "Task1Images/Task1img2.jpg";
}
//The function that displays an alert when a user right clicks on the image
function alrt() { //alrt is short for alert
    alert("img1 was clicked on");
}
//The function that displays an alert when the user enters input
function alrt2() { //alrt2 is short for alert2
    alert("You will receive a email shortly");
}