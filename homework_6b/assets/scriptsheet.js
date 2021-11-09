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

//Initialize potentially empty cart and grab cart icon//

const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue : [];
var cartIcon = document.getElementById("cart");

//Define product object constructor//

function Product(productName, productColor, productSize) {
    this.name = productName;
    this.color = productColor;
    this.size = productSize;
}


//Alter picture on screen depending on which radio buttons are checked./////////////////////////////////////////
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


//Define adding to cart function//


function addToCart(productName, productColor, productSize) {
    var quantity = document.getElementById("quantity");
    var amountItem=parseInt(quantity.value);
    for (let i=0; i < amountItem; i++){
        const item = new Product(productName, productColor, productSize);
        cart.push(item);
    }
    localStorage.setItem('savedCart', JSON.stringify(cart));
}

////////////////////////////////////////////////////////////////

var color = "";
var size = "";

//Check what color is checked and store it//


addCart.addEventListener('click', function() {
    if (blue.checked == true) {
        color = "blue";
    }
    else if (gray.checked == true) {
        color = "gray";
    }
    
    //Check what size is checked and store that//
    
    if (small.checked == true) {
        size = "small";
    }
    
    else if (medium.checked == true) {
        size = "medium";
    }
    
    addToCart('Fetch GPS Tracker', color, size);

})



/////////////////////////////////////////////////////////////////////////////////////

//Update the look of the cart depending on cart length//



cartIcon.innerHTML = "Cart" + " " + "(" + cart.length + ")";





















