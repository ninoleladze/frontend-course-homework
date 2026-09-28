document.addEventListener('DOMContentLoaded', async () => {
    const productsGrid = document.getElementById('products-grid');
    const loadingElement = document.getElementById('loading');
    const noProductsElement = document.getElementById('no-products');
    
    const categoryFilter = document.getElementById('category-filter');
    const brandFilter = document.getElementById('brand-filter');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyPriceBtn = document.getElementById('apply-price');
    const ratingFilter = document.getElementById('rating-filter');
    const ratingValue = document.getElementById('rating-value');
    
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    let filters = {
        name: '',
        category: '',
        brand: '',
        minPrice: '',
        maxPrice: '',
        minRating: 0
    };
    
    async function loadProducts() {
        if (!productsGrid) return;
        
        loadingElement.style.display = 'flex';
        productsGrid.innerHTML = '';
        noProductsElement.style.display = 'none';
        
        try {
            const products = await api.fetchProducts(filters);
            
            loadingElement.style.display = 'none';
            
            if (products.length === 0) {
                noProductsElement.style.display = 'block';
                return;
            }
            
            products.forEach(product => {
                const productCard = createProductCard(product);
                productsGrid.appendChild(productCard);
            });
        } catch (error) {
            loadingElement.style.display = 'none';
            console.error('Error loading products:', error);
            productsGrid.innerHTML = '<div class="error-message">Failed to load products. Please try again later.</div>';
        }
    }
    
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const stars = generateStarRating(product.rating);
        
        card.innerHTML = `
            <a href="pages/product-details.html?id=${product.id}" class="product-link">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <div class="product-rating">
                        <div class="stars">${stars}</div>
                        <span class="rating-count">(${product.reviewCount} reviews)</span>
                    </div>
                </div>
            </a>
            <button class="add-to-cart-btn" data-product-id="${product.id}">
                Add to Cart
            </button>
        `;
        
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = parseInt(addToCartBtn.getAttribute('data-product-id'));
            const added = addToCart(productId);
            
            if (added) {
                const originalText = addToCartBtn.textContent;
                addToCartBtn.textContent = 'Added!';
                addToCartBtn.disabled = true;
                
                setTimeout(() => {
                    addToCartBtn.textContent = originalText;
                    addToCartBtn.disabled = false;
                }, 1500);
            }
        });
        
        return card;
    }
    
    function generateStarRating(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars;
    }
    
    async function loadFilterOptions() {
        if (!categoryFilter || !brandFilter) return;
        
        try {
            const categories = await api.fetchCategories();
            const brands = await api.fetchBrands();
            
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category;
                option.textContent = category;
                categoryFilter.appendChild(option);
            });
            
            brands.forEach(brand => {
                const option = document.createElement('option');
                option.value = brand;
                option.textContent = brand;
                brandFilter.appendChild(option);
            });
        } catch (error) {
            console.error('Error loading filter options:', error);
        }
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', () => {
            filters.category = categoryFilter.value;
            loadProducts();
        });
    }
    
    if (brandFilter) {
        brandFilter.addEventListener('change', () => {
            filters.brand = brandFilter.value;
            loadProducts();
        });
    }
    
    if (applyPriceBtn) {
        applyPriceBtn.addEventListener('click', () => {
            filters.minPrice = minPriceInput.value ? parseInt(minPriceInput.value) : '';
            filters.maxPrice = maxPriceInput.value ? parseInt(maxPriceInput.value) : '';
            loadProducts();
        });
    }
    
    if (ratingFilter) {
        ratingFilter.addEventListener('input', () => {
            const value = parseInt(ratingFilter.value);
            filters.minRating = value;
            ratingValue.textContent = value > 0 ? `${value}+ stars` : 'Any rating';
            loadProducts();
        });
    }
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            filters.name = searchInput.value;
            loadProducts();
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                filters.name = searchInput.value;
                loadProducts();
            }
        });
    }
    
    await loadFilterOptions();
    await loadProducts();
});
