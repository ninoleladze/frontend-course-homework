const productContainer = document.getElementById('productContainer');

fetch('https://api.everrest.educata.dev/shop/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            productContainer.innerHTML += createProductCard(product);
        });
    });

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" width="100%">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price}₾</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        </div>
    `;
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
