var total = parseInt(sessionStorage.getItem("Total")); //gets the value of the total

$("#slct1").hide(); //hides the content of the drop down
$("#slct2").hide(); //hides the content of the drop down

//a jQuery function to make a drop down which slides for 0.5 seconds when clicked
$(function() {
    $("#coll").click(function() {
        $("#slct1").slideToggle(500);
    });
});

//a jQuery function to make a drop down which slides for 0.5 seconds when clicked
$(function() {
    $("#del").click(function() {
        $("#slct2").slideToggle(500);
    });
});

let selct = null;
// a function to determine the total with the form of delivery the user selects
$("#air").click(function() {
    if (selct != null) {
        if (selct == false) {
            sessionStorage.setItem("Total", total += 20);
            alert("Your Total Is Now: R" + total)
            selct = true;
        };
    } else if (selct == null) {
        sessionStorage.setItem("Total", total += 40);
        alert("Your Total Is Now: R" + total)
        selct = true;
    };
});
// a function to determine the total with the form of delivery the user selects
$("#shp").click(function() {
    if (selct != null) {
        if (selct == true) {
            sessionStorage.setItem("Total", total -= 20);
            alert("Your Total Is Now: R" + total)
            selct = false;
        };
    } else if (selct == null) {
        sessionStorage.setItem("Total", total += 20);
        alert("Your Total Is Now: R" + total)
        selct = false;
    };
});

//a function for when the user decides to pay for their items
function pay() {
    var total = parseInt(sessionStorage.getItem("Total"));
    var cart = JSON.parse(sessionStorage.getItem("Cart"));

    sessionStorage.setItem("Total", 0); //resets the total to zero
    sessionStorage.setItem("Cart", JSON.stringify([]));

    var rNum = (Math.random() * 0xFFFFFF << 0).toString(16); //generates a reference number using hexadecimal code
    alert("Your Reference Number Is: " + rNum) // displays the reference number through an alert
};