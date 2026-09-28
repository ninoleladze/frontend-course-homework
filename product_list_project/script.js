
fetch('https://api.everrest.educata.dev/products?limit=5&page=1&sortBy=price.current&sortDirection=asc')
    .then(response => response.json())
    .then(data => {
        displayProducts(data.products);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayProducts(products) {
    const container = document.getElementById('productsContainer');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price.current} ${product.price.currency}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <p><strong>Rating:</strong> ${product.rating.toFixed(1)}</p>
        `;

        container.appendChild(productCard);
    });
}
