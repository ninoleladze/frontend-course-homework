document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.getElementById('product-list');
    try {
        const response = await fetch('https://api.everrest.educata.dev/products');
        const data = await response.json();
        data.products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product-card';
            div.innerHTML = `
                <h3>${product.title}</h3>
                <img src="${product.thumbnail}" width="100">
                <p>${product.price.current} ${product.price.currency}</p>
                <button onclick="addToCart('${product._id}', '${product.title}', ${product.price.current})">Add to Cart</button>
            `;
            productList.appendChild(div);
        });
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
});

function addToCart(id, title, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id, title, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Added to cart');
}
