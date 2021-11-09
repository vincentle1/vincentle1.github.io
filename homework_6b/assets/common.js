//Initialize potentially empty cart and grab cart icon//

const storedValue = JSON.parse(localStorage.getItem('savedCart'));
const cart = storedValue ? storedValue : [];
var cartIcon = document.getElementById("cart");

//Update the look of the cart depending on cart length//


cartIcon.innerHTML = "Cart" + " " + "(" + cart.length + ")";

/*//product constructor
function Product(productName, productColor, productSize) {
    this.name = productName;
    this.color = productColor;
    this.size = productSize;
}
*/
