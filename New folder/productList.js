const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

document.addEventListener('DOMContentLoaded', async () => {
    const detailsContainer = document.getElementById('product-details');

    try {
        const response = await fetch(`https://api.everrest.educata.dev/products/${productId}`);
        const product = await response.json();

        detailsContainer.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" width="150">
            <p>${product.description}</p>
            <p>Price: ${product.price.current} ${product.price.currency}</p>
            <button onclick="addToCart('${product._id}', '${product.title}', ${product.price.current})">Add to Cart</button>
        `;
    } catch (error) {
        console.error('Failed to load product details:', error);
    }
});
