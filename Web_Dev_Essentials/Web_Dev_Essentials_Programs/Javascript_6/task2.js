var drinks, food; //setting variables
//[lines 3-4 & 6-7] objects are created and stored in session storage
drinks = { "Jive": 10, "Fanta": 10, "Monster": 15, "Coke": 15, "Milkshake": 20 };
sessionStorage.setItem("Beverages", JSON.stringify(drinks));

food = { "Lasagne": 50, "Sushi": 150, "Pizza": 120, "Burger": 50, "Chips": 20 };
sessionStorage.setItem("Food", JSON.stringify(food));

var total = 0;
sessionStorage.setItem("total", total)
//function to calculate beverage prices
function bev() {
    total = parseInt(sessionStorage.getItem("total"));
    var drnk = JSON.parse(sessionStorage.getItem("Beverages"));

    var drnkNme = prompt("What Drink Would You Like?");
    var drnkNm = drnkNme.charAt(0).toUpperCase() + drnkNme.slice(1); //capitalizes the first letter of the word entered

    total += drnk[drnkNm]; // the entered item's price will be added to the total 
    var tip = prompt("Would You Like To Tip?");

    if (tip == "Yes" || tip == "yes") { // a conditional statement for the cases of "yes"
        var tipAmt = prompt("Enter the tip amount:");
        total += parseInt(tipAmt); // the entered tip will be added to the total
    };

    sessionStorage.setItem("total", total);
    alert("You owe R" + total); // the bill will be displayed in an alert
};
//functions to calculate food prices
function fwd() {
    total = parseInt(sessionStorage.getItem("total"));
    var fwd = JSON.parse(sessionStorage.getItem("Food"));

    var fwdNme = prompt("What Food Would You Like?");
    var fwdNm = fwdNme.charAt(0).toUpperCase() + fwdNme.slice(1); //capitalizes the first letter of the word entered

    total += fwd[fwdNm]; // the entered item's price will be added to the total
    var tip = prompt("Would You Like To Tip?");

    if (tip == "Yes" || tip == "yes") { // a conditional statement for the cases of "yes"
        var tipAmt = prompt("Enter the tip amount:");
        total += parseInt(tipAmt); // the entered tip will be added to the total
    };

    sessionStorage.setItem("total", total);
    alert("You owe R" + total); // the bill will be displayed in an alert
};

/*Variable names:
drnkNme drink Name
drnkNm drink Name
fwdNme food Name
fwdNm food Name
tipAmt tip Amount
*/