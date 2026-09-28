document.addEventListener("DOMContentLoaded", function () {
    let productsContainer = document.getElementById("products-container");
    let searchInput = document.getElementById("search");
    let cartButton = document.getElementById("cart-btn");
    let categoryFilter = document.getElementById("category-filter");
    let brandFilter = document.getElementById("brand-filter");
    let priceFilter = document.getElementById("price-filter");
    let ratingFilter = document.getElementById("rating-filter");
    let applyFiltersButton = document.getElementById("apply-filters");
    let API_URL = "https://api.everrest.educata.dev";
    let cart = [];
    let user = null;

    function fetchProducts() {
        fetch(`${API_URL}/shop/products/all`)
            .then(res => res.json())
            .then(data => {
                displayProducts(data.products);
            })
            .catch(error => console.error("შეცდომა მონაცემების მიღებისას", error));
    }

    function displayProducts(products) {
        productsContainer.innerHTML = "";
        products.forEach(product => {
            let productCard = document.createElement("div");
            productCard.classList.add("product-card");
            productCard.innerHTML = `
                <img src="${product.category.image}" alt="${product.title}">
                <h3 onclick="showProductDetails('${product._id}')" style="cursor:pointer; color:#ff66b2;">${product.title}</h3>
                <p>ფასი: ${product.price.value}₾</p>
                <p>რეიტინგი: ${product.rating} ⭐</p>
                <button onclick="addToCart('${product._id}', '${product.title}', ${product.price.value})">კალათაში დამატება</button>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    function showProductDetails(productId) {
        window.location.href = `product_details.html?id=${productId}`;
    }

    function addToCart(productId, title, price) {
        if (user) {
            cart.push({ id: productId, title, price });
            alert("პროდუქტი დაემატა კალათაში!");
        } else {
            alert("გთხოვთ, პირველად ჩაერთოთ სისტემაში!");
        }
    }

    cartButton.addEventListener("click", () => {
        window.location.href = "cart.html";
    });

    applyFiltersButton.addEventListener("click", fetchProducts);
    searchInput.addEventListener("input", fetchProducts);
    fetchProducts();
});
