const productsContainer = document.getElementById('product-list');

const products = [
    {
        "_id": "6526cb4e57e3ec956179e70f",
        "title": "ASUS Vivobook Go 15",
        "thumbnail": "https://i.imgur.com/IBhCeeP.jpg",
        "price": { "current": 190 }
    },
    {
        "_id": "6526b9bb57e3ec956179e6ee",
        "title": "Lenovo 3i Chromebook",
        "thumbnail": "https://i.imgur.com/WqyCZJ2.jpg",
        "price": { "current": 255 }
    }
];

function renderProducts() {
    productsContainer.innerHTML = products.map(product => createProductCard(product)).join('');
}

renderProducts();
