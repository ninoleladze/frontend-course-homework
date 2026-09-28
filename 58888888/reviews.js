// reviews.js
document.addEventListener('DOMContentLoaded', () => {
    const reviewModal = document.getElementById('review-modal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            if (modal) modal.style.display = 'none';
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === reviewModal) {
            reviewModal.style.display = 'none';
        }
    });
});
