let cart = [];

function addToCart(productId) {
    const product = products.find(p => p._id === productId);
    if (product) {
        cart.push(product);
        alert(`${product.title} added to cart!`);
        console.log(cart);
    }
}
