document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-list');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Cart is empty</p>';
        return;
    }

    cart.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <h3>${item.title}</h3>
            <p>Price: ${item.price}</p>
        `;
        cartList.appendChild(div);
    });
});
