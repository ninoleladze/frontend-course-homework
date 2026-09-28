function createProductCard(product) {
    return `
        <div class="product-card">
            <img class="product-image" src="${product.thumbnail}" alt="${product.title}">
            <div class="product-info">
                <div class="product-title">${product.title}</div>
                <div class="product-price">$${product.price.current}</div>
                <button onclick="addToCart('${product._id}')">Add to Cart</button>
            </div>
        </div>
    `;
}
