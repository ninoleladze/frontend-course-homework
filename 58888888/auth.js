document.addEventListener('DOMContentLoaded', () => {
    const authContainer = document.getElementById('auth-container');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginError = document.getElementById('login-error');
    const registerError = document.getElementById('register-error');
    
    const closeModals = document.querySelectorAll('.close-modal');
    
    function updateAuthUI() {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (user && localStorage.getItem('token')) {
            authContainer.innerHTML = `
                <div class="user-info">
                    <span>Hello, ${user.name}</span>
                    <button id="logout-btn" class="btn-secondary">Logout</button>
                </div>
            `;
            
            document.getElementById('logout-btn').addEventListener('click', () => {
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                updateAuthUI();
                updateCartCount();
            });
        } else {
            authContainer.innerHTML = `
                <a href="#" id="login-btn">Login</a>
                <a href="#" id="register-btn">Register</a>
            `;
            
            document.getElementById('login-btn').addEventListener('click', openLoginModal);
            document.getElementById('register-btn').addEventListener('click', openRegisterModal);
        }
    }
    
    function openLoginModal() {
        loginModal.style.display = 'block';
        loginError.textContent = '';
        loginForm.reset();
    }
    
    function openRegisterModal() {
        registerModal.style.display = 'block';
        registerError.textContent = '';
        registerForm.reset();
    }
    
    function closeModal(modal) {
        modal.style.display = 'none';
    }
    
    loginBtn?.addEventListener('click', openLoginModal);
    registerBtn?.addEventListener('click', openRegisterModal);
    
    closeModals.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeModal(closeBtn.closest('.modal'));
        });
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) closeModal(loginModal);
        if (e.target === registerModal) closeModal(registerModal);
    });
    
    loginForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        
        try {
            const data = await api.login(email, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            closeModal(loginModal);
            updateAuthUI();
            updateCartCount();
        } catch (error) {
            loginError.textContent = 'Invalid email or password';
        }
    });
    
    registerForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        
        try {
            const data = await api.register(name, email, password);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            closeModal(registerModal);
            updateAuthUI();
        } catch (error) {
            registerError.textContent = 'Registration failed. Email might already be in use.';
        }
    });
    
    updateAuthUI();
});

function isAuthenticated() {
    return localStorage.getItem('token') !== null;
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}
