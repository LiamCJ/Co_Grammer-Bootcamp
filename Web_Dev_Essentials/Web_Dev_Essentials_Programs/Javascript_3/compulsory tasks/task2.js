//This is the function that does the addition
function add() {
    var num1 = parseInt(document.getElementById("num1").value);//[lines 3-4,9-10 & 15-16]parseInt casts the value of the text into a integer which is then stored into a variable
    var num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("ansSum").innerHTML = num1 + num2;//[lines 5,12,19] do the necessary calculations and displays the answers to the respective label
}
//This is the function that does the multiplication
function mul() {//mul is short for multiply
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    document.getElementById("ansMultiply").innerHTML = num3 * num4;
}
//This is the function that does the modulus
function mod() {//mod is short for modulus
    var num5 = parseInt(document.getElementById("num5").value);
    var num6 = parseInt(document.getElementById("num6").value);
    document.getElementById("ansMod").innerHTML = num5 % num6;
}