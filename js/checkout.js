document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    const updateCartDisplay = () => {
        cartItemsContainer.innerHTML = '';  
        let totalPrice = 0;

        if (cart.length === 0) {
            const emptyMessage = document.createElement('p');
            emptyMessage.textContent = 'Your cart is empty! Fill it with joy for your furry friend';
            cartItemsContainer.appendChild(emptyMessage);
        } else {
            cart.forEach(item => {
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `${item.product} (x${item.quantity}) - Rs. ${item.price * item.quantity}/-`;
                cartItemsContainer.appendChild(cartItem);
                totalPrice += item.price * item.quantity;
            });
        }

        totalPriceElement.textContent = `Total: Rs. ${totalPrice}/-`;
    };

    const addToCart = (product, price, quantityId) => {
        const quantity = parseInt(document.getElementById(quantityId).value) || 1;  
        const itemIndex = cart.findIndex(item => item.product === product);
        
        if (itemIndex > -1) {
            cart[itemIndex].quantity += quantity;
        } else {
            cart.push({ product, price, quantity });
        }

        updateCartDisplay();
    };

    document.querySelectorAll('.cart-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            const quantityId = button.getAttribute('data-quantity');  

            addToCart(product, price, quantityId);
        });
    });

    // Checkout functionality
    document.getElementById('checkout-btn').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Order placed successfully!');
            cart.length = 0;  
            updateCartDisplay();
        }
    });

    // Clear Cart functionality
    document.getElementById('clear-cart-btn').addEventListener('click', () => {
        cart.length = 0;  
        updateCartDisplay();  
    });

    updateCartDisplay();  
});
