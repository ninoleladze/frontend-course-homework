document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    if (username.length < 3) {
        document.getElementById('usernameError').textContent = 'Username must be more than 3 characters';
        valid = false;
    }
 if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Email is not valid';
        valid = false;
    }
    if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be more than 6 characters';
        valid = false;
    }
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        valid = false;
    }

    if (valid) {
        alert('Form submitted successfully!');
    }
});