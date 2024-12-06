function signUp() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const contact = document.getElementById('contact').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Store the user credentials in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('email', email); // Optional: Store email if needed
    localStorage.setItem('contact', contact); // Optional: Store contact if needed

    alert(`Sign up successful! You can now log in with your account.`);
    
    // Redirect to the login page
    window.location.href = 'login.html'; // Change 'login.html' to the actual path of your login page
}
