function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored credentials from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html'; // Change 'dashboard.html' to the actual path of your dashboard page
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function signUp() {
    // Redirect to the sign-up page
    window.location.href = 'signup.html'; // Change 'signup.html' to the actual path of your sign-up page
}

function forgot() {
    const username = document.getElementById('username').value;
    alert(`Resetting password for Username: ${username}. Please check your email for further instructions.`);
}
