

//Changing the size and color//

var itemPicture = document.getElementById("main-banner");
var itemName = document.querySelector("h1");
var itemNameContainer = document.getElementById("item-title");

var gray = document.getElementById("gray");
var blue = document.getElementById("blue");

var small = document.getElementById("small");
var medium = document.getElementById("medium");

const title = document.createElement('h1');
title.textContent = "Medium Fetch GPS Tracker";




function varCheck(){

if (blue.checked == true) {
    itemPicture.setAttribute("src", "assets/product-images/fetch-gps-blue.jpg");
}

else if (blue.checked == true && small.checked == true) {
    itemPicture.setAttribute("src", "assets/product-images/fetch-gps-blue.jpg");
}
else if (blue.checked == true && medium.checked == true) {
    itemPicture.setAttribute("src", "assets/product-images/fetch-gps-blue.jpg");
    itemNameContainer.removeChild(itemName);
    itemNameContainer.appendChild(title);
}

else if (gray.checked == true && small.checked == true) {
    itemPicture.setAttribute("src", "assets/product-images/fetch-gps.jpg");

}

else if (gray.checked == true && medium.checked == true) {
    itemPicture.setAttribute("src", "assets/product-images/fetch-gps.jpg");
    itemNameContainer.removeChild(itemName);
    itemNameContainer.appendChild(title);
}

}


gray.addEventListener('click', varCheck)

blue.addEventListener('click', varCheck)

small.addEventListener('click', varCheck)

medium.addEventListener('click', varCheck)

if (blue.checked == true) {
    itemPicture.setAttribute("src", "assets/product-images/fetch-gps-blue.jpg");
}

/////////////////////////////////////////////////////////////////////////////////////

//Adding items to cart//

var addCart = document.getElementById("add-to-cart");
var cart = document.getElementById("cart");
var quantity = document.getElementById("quantity");

var amountItem=quantity.value;


function updateCartIcon(){
    cart.innerHTML = "Cart" + " " + "(" + amountItem + ")";
}


addCart.addEventListener('click', updateCartIcon);

/////////////////////////////////////////////////////////////////////////////////////












