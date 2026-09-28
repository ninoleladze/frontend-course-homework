
const productsContainer = document.getElementById('productsContainer');
const searchInput = document.getElementById('searchInput');

let allProducts = [];

function renderProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}₾</p>
            <button onclick="addToCart('${product._id}')">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (!cart.includes(productId)) {
        cart.push(productId);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchValue)
    );
    renderProducts(filteredProducts);
});

fetch('https://api.everrest.educata.dev/shop/products')
    .then(response => response.json())
    .then(data => {
        allProducts = data;
        renderProducts(data);
    })
    .catch(() => {
        productsContainer.innerHTML = '<p>Failed to load products.</p>';
    });
