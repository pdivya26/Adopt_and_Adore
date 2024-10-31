document.getElementById('clear-cart-btn').addEventListener('click', function() {
    cart = [];  // Empty the cart array
    totalPrice = 0;  // Reset the total price
    updateCart();  // Update the cart display
});