//creates an alert once the page is loaded
$(document).ready(function() {
    alert("THE PAGE HAS LOADED");
});

//changes background color once the page is loaded
$(document).ready(function() {
    $("body").css({
        "background-color": "#C0C0C0"
    });
});

// Changes paragraph style
$("p").eq(2).css({
    "color": "#8E24AA",
    "font-family": "Georgia, serif"
});

//fades out any element clicked on
$("body > *").click(function() {
    $(this).fadeToggle(3000); //"this" refers to all elements inside the body
});

//customizes the content of the accordion drop down
$("div > p").css({
    "background-color": "#000000",
    "color": "#C0C0C0",
    "padding-left": "25px",
    "display": "none",
    "width": "500px"
});

//customizes the headings of the accordion drop down 
$(".req").css({
    "border-radius": "5px",
    "width": "100px",
    "background-color": "#000000",
    "color": "#C0C0C0",
    "transition": "0.4s",
    "padding-top": "10px",
    "padding-bottom": "10px"
});
//[lines 44-60] make the accordion possible
var drop = document.getElementsByClassName("req"); //"drop" refers to all the elements with the class "req"

for (let i = 0; i < drop.length; i++) {
    drop[i].addEventListener("mouseover", function() { //[lines 47 & 54] assign event listeners to "drop"
        this.style.backgroundColor = '#8E24AA';
        var opts = this.nextElementSibling; //[lines 49 & 56] assigns sibling next to "drop" which are the paragraphs to the variable "opts"
        opts.style.display = "block";

    });

    drop[i].addEventListener("mouseout", function() {
        this.style.backgroundColor = '#000000';
        var opts = this.nextElementSibling;
        opts.style.display = "none";

    });
};

//chained effect while background changes colors once the button is clicked
var colors = ["#228B22", "#008000", "#006400"]; //array of colors that the background change into
var i = 0;
$("#strt").click(function startC(){
setInterval(function() { //an interval of 10 seconds is set for the following to take place
    $("body > *").slideUp(2000).slideDown(2000); //chained effect
    //changes background colors
    $("body").css({
        backgroundColor: colors[i] //the background color is set to a different color inside of the array "colors" with each interval 
    });
    //conditional statement for when the index is undefined
    if (!colors[i]) { //if the index is undefined the index will be reset to 0 
        i = 0;
    } else { //if the index is still in range the index will be incremented 
        i++;
    };
}, 5000);
});

//buttons to fade image in and out
$("#show").click(function() {
    $("#img14").fadeIn(3000);
    $("#hide").fadeIn(3000);
    $("#stp").fadeIn();
});

$("#hide").click(function() {
    $("#img14").fadeOut(3000);
    $("#show").fadeIn(3000);
    $("#stp").fadeIn();
});
//button that stops when image is fading
$("#stp").click(function() {
    $("#img14").stop();
    $("#hide").fadeIn(3000);
    $("#show").fadeIn(3000);
});