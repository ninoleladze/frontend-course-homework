document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('https://api.everrest.educata.dev/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();

        if (response.ok) {
            localStorage.setItem('token', data.token);
            document.getElementById('login-message').textContent = 'Login successful!';
            setTimeout(() => window.location.href = 'index.html', 1000);
        } else {
            document.getElementById('login-message').textContent = 'Login failed!';
        }
    } catch (error) {
        console.error('Login error:', error);
    }
});
