const API_URL = 'https://api.everrest.educata.dev';

const api = {
    async fetchProducts(filters = {}) {
        let url = `${API_URL}/products`;
        
        const queryParams = [];
        if (filters.name) queryParams.push(`name=${encodeURIComponent(filters.name)}`);
        if (filters.category) queryParams.push(`category=${encodeURIComponent(filters.category)}`);
        if (filters.brand) queryParams.push(`brand=${encodeURIComponent(filters.brand)}`);
        if (filters.minPrice) queryParams.push(`minPrice=${filters.minPrice}`);
        if (filters.maxPrice) queryParams.push(`maxPrice=${filters.maxPrice}`);
        if (filters.minRating) queryParams.push(`minRating=${filters.minRating}`);
        
        if (queryParams.length > 0) {
            url += `?${queryParams.join('&')}`;
        }
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch products');
            return await response.json();
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },
    
    async fetchProductById(id) {
        try {
            const response = await fetch(`${API_URL}/products/${id}`);
            if (!response.ok) throw new Error('Failed to fetch product');
            return await response.json();
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    },
    
    async fetchCategories() {
        try {
            const response = await fetch(`${API_URL}/categories`);
            if (!response.ok) throw new Error('Failed to fetch categories');
            return await response.json();
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw error;
        }
    },
    
    async fetchBrands() {
        try {
            const response = await fetch(`${API_URL}/brands`);
            if (!response.ok) throw new Error('Failed to fetch brands');
            return await response.json();
        } catch (error) {
            console.error('Error fetching brands:', error);
            throw error;
        }
    },
    
    async fetchProductReviews(productId) {
        try {
            const response = await fetch(`${API_URL}/products/${productId}/reviews`);
            if (!response.ok) throw new Error('Failed to fetch reviews');
            return await response.json();
        } catch (error) {
            console.error(`Error fetching reviews for product ${productId}:`, error);
            throw error;
        }
    },
    
    async addReview(productId, reviewData) {
        try {
            const response = await fetch(`${API_URL}/products/${productId}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(reviewData)
            });
            
            if (!response.ok) throw new Error('Failed to add review');
            return await response.json();
        } catch (error) {
            console.error('Error adding review:', error);
            throw error;
        }
    },
    
    async login(email, password) {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            
            if (!response.ok) throw new Error('Invalid credentials');
            return await response.json();
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    },
    
    async register(name, email, password) {
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            
            if (!response.ok) throw new Error('Registration failed');
            return await response.json();
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }
};
