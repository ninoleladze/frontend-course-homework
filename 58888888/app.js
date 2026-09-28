document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    window.location.href = `index.html?search=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
    
    function checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchTerm = urlParams.get('search');
        
        if (searchTerm && searchInput) {
            searchInput.value = searchTerm;
            
            if (typeof loadProducts === 'function') {
                filters.name = searchTerm;
                loadProducts();
            }
        }
    }
    
    checkUrlParams();
});
