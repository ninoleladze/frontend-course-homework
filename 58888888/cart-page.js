document.addEventListener('DOMContentLoaded', async () => {
    const loadingElement = document.getElementById('loading');
    const emptyCartElement = document.getElementById('empty-cart');
    const cartContentElement = document.getElementById('cart-content');
    const cartItemsContainer = document.getElementById('cart-items');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    let products = [];
    
    async function loadCartPage() {
        if (!isAuthenticated()) {
            window.location.href = '../index.html';
            return;
        }
        
        loadingElement.style.display = 'flex';
        
        try {
            products = await api.fetchProducts();
            
            loadingElement.style.display = 'none';
            
            if (cart.length === 0) {
                emptyCartElement.style.display = 'block';
                return;
            }
            
            renderCart();
            cartContentElement.style.display = 'block';
        } catch (error) {
            console.error('Error loading cart:', error);
            loadingElement.style.display = 'none';
            cartContentElement.innerHTML = '<div class="error-message">Failed to load cart. Please try again later.</div>';
        }
    }
    
    function renderCart() {
        cartItemsContainer.innerHTML = '';
        
        let validCartItems = [];
        
        cart.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.productId);
            
            if (product) {
                validCartItems.push({ ...cartItem, product });
                
                const cartItemElement = document.createElement('div');
                cartItemElement.className = 'cart-item';
                
                cartItemElement.innerHTML = `
                    <div class="item-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    
                    <div class="item-details">
                        <a href="product-details.html?id=${product.id}" class="item-name">
                            ${product.name}
                        </a>
                        
                        <div class="item-meta">
                            <div class="item-price">$${product.price.toFixed(2)}</div>
                            <div class="item-stock">
                                ${product.stock} in stock
                            </div>
                            <div class="item-rating">
                                <div class="stars">${generateStarRating(product.rating)}</div>
                                <span class="review-count">(${product.reviewCount} reviews)</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="item-actions">
                        <div class="quantity-controls">
                            <button class="quantity-btn decrease" data-product-id="${product.id}">-</button>
                            <input type="number" value="${cartItem.quantity}" min="1" max="${product.stock}" data-product-id="${product.id}">
                            <button class="quantity-btn increase" data-product-id="${product.id}">+</button>
                        </div>
                        
                        <div class="item-subtotal">
                            $${(product.price * cartItem.quantity).toFixed(2)}
                        </div>
                        
                        <button class="remove-btn" data-product-id="${product.id}">
                            Remove
                        </button>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItemElement);
            }
        });
        
        if (validCartItems.length === 0) {
            emptyCartElement.style.display = 'block';
            cartContentElement.style.display = 'none';
            return;
        }
        
        attachCartItemEvents();
        updateCartTotals();
    }
    
    function attachCartItemEvents() {
        document.querySelectorAll('.quantity-btn.decrease').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.getAttribute('data-product-id'));
                const cartItem = cart.find(item => item.productId === productId);
                
                if (cartItem && cartItem.quantity > 1) {
                    updateCartItemQuantity(productId, cartItem.quantity - 1);
                    renderCart();
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.increase').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.getAttribute('data-product-id'));
                const cartItem = cart.find(item => item.productId === productId);
                const product = products.find(p => p.id === productId);
                
                if (cartItem && product && cartItem.quantity < product.stock) {
                    updateCartItemQuantity(productId, cartItem.quantity + 1);
                    renderCart();
                }
            });
        });
        
        document.querySelectorAll('.item-actions input[type="number"]').forEach(input => {
            input.addEventListener('change', () => {
                const productId = parseInt(input.getAttribute('data-product-id'));
                const quantity = parseInt(input.value);
                const product = products.find(p => p.id === productId);
                
                if (quantity > 0 && product && quantity <= product.stock) {
                    updateCartItemQuantity(productId, quantity);
                    renderCart();
                }
            });
        });
        
        document.querySelectorAll('.remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const productId = parseInt(btn.getAttribute('data-product-id'));
                removeFromCart(productId);
                renderCart();
            });
        });
    }
    
    function updateCartTotals() {
        let subtotal = 0;
        
        cart.forEach(cartItem => {
            const product = products.find(p => p.id === cartItem.productId);
            if (product) {
                subtotal += product.price * cartItem.quantity;
            }
        });
        
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        totalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
    
    function generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            alert('Checkout functionality will be implemented in the future!');
        });
    }
    
    await loadCartPage();
});
