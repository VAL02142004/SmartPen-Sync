javascript
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (event.submitter.id === 'loginButton') {
        alert('Login clicked. Username: ' + username + ', Password: ' + password);
    } else if (event.submitter.id === 'signUpButton') {
        alert('Sign Up clicked. Username: ' + username + ', Password: ' + password);
    }
});
