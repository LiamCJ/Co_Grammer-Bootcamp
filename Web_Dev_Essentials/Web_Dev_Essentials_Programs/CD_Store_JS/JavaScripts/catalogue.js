//gets and sets the original total (which is zero) and cart (which is null) when the user uses the page for the first time
var total = parseInt(sessionStorage.getItem("Total"));
if (!total) { //if the total is not true a new total will be created along with a new cart
    total = 0;
    var cart = [];
    sessionStorage.setItem("Cart", JSON.stringify(cart));
} else {
    var cart = JSON.parse(sessionStorage.getItem("Cart"));
};

sessionStorage.setItem("Total", total);

//[lines 23-40]functions to add product to cart
$(".addToCart").click(function() {
    var cart = JSON.parse(sessionStorage.getItem("Cart"));
    var total = parseInt(sessionStorage.getItem("Total"));

    //a conditional statement for when the cart is empty the product will be inserted in the array else the product will be added to the array
    if (cart == null) {
        cart = [
            [$(this).data("name"), $(this).data("price")]
        ];
    } else {
        cart.push([$(this).data("name"), $(this).data("price")]);
    };

    //saves the cart
    sessionStorage.setItem("Cart", JSON.stringify(cart));

    //increasing the total and displaying it
    sessionStorage.setItem("Total", total += parseFloat($(this).data("price")));
    alert("Your Current Total Is R" + total);
})