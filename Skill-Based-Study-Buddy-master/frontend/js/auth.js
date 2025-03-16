// auth.js

// Sign up function
async function signup(event) {
    event.preventDefault(); // Prevent form from reloading the page on submit

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Prepare the data to be sent to the backend
    const userData = {
        username: username,
        email: email,
        password: password
    };

    try {
        // Send a POST request to the backend for sign-up
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        // Check if the response is successful
        if (response.ok) {
            const result = await response.json();
            alert('Signup successful!');
            window.location.href = '/login.html'; // Redirect to login page
        } else {
            const error = await response.json();
            alert('Signup failed: ' + error.message);
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert('Signup failed due to network error.');
    }
}

// Login function
async function login(event) {
    event.preventDefault(); // Prevent form from reloading the page on submit

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Prepare the data to be sent to the backend
    const loginData = {
        email: email,
        password: password
    };

    try {
        // Send a POST request to the backend for login
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        });

        // Check if the response is successful
        if (response.ok) {
            const result = await response.json();
            localStorage.setItem('userToken', result.token); // Store the JWT token
            window.location.href = '/dashboard.html'; // Redirect to the dashboard page
        } else {
            const error = await response.json();
            alert('Login failed: ' + error.message);
        }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed due to network error.');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('userToken'); // Remove JWT token
    window.location.href = '/login.html'; // Redirect to the login page
}

// Check if the user is logged in
function checkAuth() {
    const token = localStorage.getItem('userToken');
    if (!token) {
        window.location.href = '/login.html'; // Redirect to login page if not logged in
    }
}

// Check authentication on page load (for protected pages like dashboard)
window.onload = function() {
    checkAuth();
};

// Add event listeners to the login and signup forms
document.getElementById('signup-form').addEventListener('submit', signup);
document.getElementById('login-form').addEventListener('submit', login);
