

javascript
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const contact = document.getElementById('contact').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Here you can add code to handle the form submission, e.g., send data to a server
    console.log('Form submitted:', { email, username, password, contact });
    alert('Form submitted successfully!');
});
