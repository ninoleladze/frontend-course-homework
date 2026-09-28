document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (!productId) {
        window.location.href = '../index.html';
        return;
    }
    
    const loadingElement = document.getElementById('loading');
    const productDetailsElement = document.getElementById('product-details');
    const productNotFoundElement = document.getElementById('product-not-found');
    
    const detailsTabBtn = document.getElementById('details-tab-btn');
    const reviewsTabBtn = document.getElementById('reviews-tab-btn');
    const detailsTab = document.getElementById('details-tab');
    const reviewsTab = document.getElementById('reviews-tab');
    
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const rateProductBtn = document.getElementById('rate-product-btn');
    const quantityInput = document.getElementById('quantity');
    
    const reviewModal = document.getElementById('review-modal');
    const reviewForm = document.getElementById('review-form');
    const reviewerNameInput = document.getElementById('reviewer-name');
    const reviewCommentInput = document.getElementById('review-comment');
    const ratingInputStars = document.querySelectorAll('.rating-input i');
    const ratingValueInput = document.getElementById('rating-value');
    const reviewError = document.getElementById('review-error');
    const cancelReviewBtn = document.getElementById('cancel-review');
    
    let product = null;
    
    async function loadProductDetails() {
        try {
            product = await api.fetchProductById(productId);
            
            document.title = `${product.name} - Online Store`;
            
            document.getElementById('product-image').src = product.image;
            document.getElementById('product-name').textContent = product.name;
            document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
            document.getElementById('product-brand').textContent = product.brand;
            document.getElementById('product-release-date').textContent = new Date(product.releaseDate).toLocaleDateString();
            document.getElementById('product-stock').textContent = `${product.stock} remaining`;
            document.getElementById('product-description').textContent = product.description;
            
            const starsElement = document.getElementById('product-stars');
            starsElement.innerHTML = generateStarRating(product.rating);
            
            document.getElementById('product-rating-count').textContent = `(${product.reviewCount} reviews)`;
            
            if (product.features && product.features.length > 0) {
                const featuresElement = document.getElementById('product-features');
                featuresElement.innerHTML = '';
                
                product.features.forEach(feature => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresElement.appendChild(li);
                });
            } else {
                document.getElementById('features-section').style.display = 'none';
            }
            
            if (product.stock === 0) {
                addToCartBtn.disabled = true;
                addToCartBtn.textContent = 'Out of Stock';
                quantityInput.disabled = true;
            } else {
                quantityInput.max = product.stock;
            }
            
            loadingElement.style.display = 'none';
            productDetailsElement.style.display = 'block';
            
            await loadProductReviews();
        } catch (error) {
            console.error('Error loading product details:', error);
            loadingElement.style.display = 'none';
            productNotFoundElement.style.display = 'block';
        }
    }
    
    async function loadProductReviews() {
        try {
            const reviews = await api.fetchProductReviews(productId);
            const reviewsContainer = document.getElementById('reviews-container');
            const noReviewsElement = document.getElementById('no-reviews');
            
            if (reviews.length === 0) {
                noReviewsElement.style.display = 'block';
                return;
            }
            
            reviewsContainer.innerHTML = '';
            
            reviews.forEach(review => {
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review-item';
                
                reviewElement.innerHTML = `
                    <div class="review-header">
                        <div class="reviewer-name">${review.fullName}</div>
                        <div class="review-date">${new Date(review.createdAt).toLocaleDateString()}</div>
                    </div>
                    <div class="review-rating">
                        ${generateStarRating(review.rating)}
                    </div>
                    ${review.comment ? `<div class="review-comment">${review.comment}</div>` : ''}
                `;
                
                reviewsContainer.appendChild(reviewElement);
            });
        } catch (error) {
            console.error('Error loading reviews:', error);
        }
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
    
    if (detailsTabBtn && reviewsTabBtn) {
        detailsTabBtn.addEventListener('click', () => {
            detailsTabBtn.classList.add('active');
            reviewsTabBtn.classList.remove('active');
            detailsTab.classList.add('active');
            reviewsTab.classList.remove('active');
        });
        
        reviewsTabBtn.addEventListener('click', () => {
            reviewsTabBtn.classList.add('active');
            detailsTabBtn.classList.remove('active');
            reviewsTab.classList.add('active');
            detailsTab.classList.remove('active');
        });
    }
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            if (!product) return;
            
            const quantity = parseInt(quantityInput.value);
            
            if (quantity <= 0 || quantity > product.stock) {
                alert(`Please enter a valid quantity (1-${product.stock})`);
                return;
            }
            
            const added = addToCart(product.id, quantity);
            
            if (added) {
                const originalText = addToCartBtn.textContent;
                addToCartBtn.textContent = 'Added to Cart!';
                addToCartBtn.disabled = true;
                
                setTimeout(() => {
                    addToCartBtn.textContent = originalText;
                    addToCartBtn.disabled = false;
                }, 1500);
            }
        });
    }
    
    if (rateProductBtn) {
        rateProductBtn.addEventListener('click', () => {
            if (!isAuthenticated()) {
                alert('Please login to rate this product');
                return;
            }
            
            const user = getCurrentUser();
            if (user) {
                reviewerNameInput.value = user.name;
            }
            
            reviewModal.style.display = 'block';
        });
    }
    
    if (ratingInputStars.length > 0) {
        ratingInputStars.forEach(star => {
            star.addEventListener('mouseover', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                updateStarDisplay(rating);
            });
            
            star.addEventListener('click', () => {
                const rating = parseInt(star.getAttribute('data-rating'));
                ratingValueInput.value = rating;
                updateStarDisplay(rating);
            });
        });
        
        document.querySelector('.rating-input').addEventListener('mouseout', () => {
            updateStarDisplay(parseInt(ratingValueInput.value));
        });
    }
    
    function updateStarDisplay(rating) {
        ratingInputStars.forEach(star => {
            const starRating = parseInt(star.getAttribute('data-rating'));
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const rating = parseInt(ratingValueInput.value);
            const fullName = reviewerNameInput.value.trim();
            const comment = reviewCommentInput.value.trim();
            
            if (!fullName) {
                reviewError.textContent = 'Please enter your full name';
                return;
            }
            
            try {
                await api.addReview(productId, {
                    rating,
                    fullName,
                    comment
                });
                
                reviewModal.style.display = 'none';
                await loadProductReviews();
                
                reviewsTabBtn.click();
                
                reviewForm.reset();
                ratingValueInput.value = '5';
                updateStarDisplay(5);
            } catch (error) {
                reviewError.textContent = 'Failed to submit review. Please try again.';
            }
        });
    }
    
    if (cancelReviewBtn) {
        cancelReviewBtn.addEventListener('click', () => {
            reviewModal.style.display = 'none';
        });
    }
    
    document.querySelectorAll('.close-modal').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeBtn.closest('.modal').style.display = 'none';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
    });
    
    await loadProductDetails();
});
