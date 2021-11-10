const cartItem = document.getElementById('cart-item');
const template = document.getElementById('cart-item-template');

var quantity = document.getElementById("quantity");


var button = document.getElementById("cancel");

var size = document.getElementById("item-size");
var color = document.getElementById("item-color");

///remove from cart function/////
function removeCart(item){
   
        const index = cart.findIndex( function(cartItem) {
            if (cartItem.color == item.color && cartItem.size == item.size){
                return true;
            }
        })
    cart.splice(index, 1);
    localStorage.setItem('savedCart', JSON.stringify(cart));
        
}


//////////////////////////////

function showProductinCart(item) {
    
    const clone = template.content.cloneNode(true);
    
    clone.querySelector('.item-name').innerText = item.name;

    clone.querySelector('.item-size').innerText = item.size;
    

    clone.querySelector('.item-color').innerText = item.color;
    

    //remove from cart
    const button=clone.querySelector('#cancel');
    button.addEventListener('click', function(event) {
        console.log(event.target)
        console.log(event.target.parentNode.parentNode.parentNode);
        removeCart(item);
        document.getElementById('cart-enclosed').removeChild(event.target.parentNode.parentNode.parentNode);
    })

    document.getElementById('cart-enclosed').appendChild(clone);
   
    


}


////////////////////////////////////////////////////////////////////////////////////////

for (item of cart) {
    showProductinCart(item);
}