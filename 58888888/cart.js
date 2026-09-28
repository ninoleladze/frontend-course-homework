let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (!cartCountElement) return;
    
    if (isAuthenticated()) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
        cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
    } else {
        cartCountElement.textContent = '0';
        cartCountElement.style.display = 'none';
    }
}

function addToCart(productId, quantity = 1) {
    if (!isAuthenticated()) {
        alert('Please login to add items to cart');
        return false;
    }
    
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }
    
    saveCart();
    return true;
}

function updateCartItemQuantity(productId, quantity) {
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex !== -1) {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            cart[itemIndex].quantity = quantity;
            saveCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});
