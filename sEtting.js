function toggleButtons(item, enable) {
    const enableButton = item.querySelector('.enable');
    const disableButton = item.querySelector('.disable');

    // Save the state in localStorage
    localStorage.setItem('buttonState', enable ? 'enable' : 'disable');

    // Remove active class from both buttons
    enableButton.classList.remove('active');
    disableButton.classList.remove('active');

    if (enable) {
        enableButton.classList.add('active');
        enableButton.style.backgroundColor = '#E27D60';
        enableButton.style.color = '#fff';
        disableButton.style.backgroundColor = '#fff';
        disableButton.style.color = '#E27D60';
    } else {
        disableButton.classList.add('active');
        enableButton.style.backgroundColor = '#fff';
        enableButton.style.color = '#E27D60';
        disableButton.style.backgroundColor = '#E27D60';
        disableButton.style.color = '#fff';
    }
}

function initializeButtonState(item) {
    const savedState = localStorage.getItem('buttonState');
    if (savedState === 'enable') {
        toggleButtons(item, true);
    } else {
        toggleButtons(item, false);
    }
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const item = document.querySelector('.button-container'); // Change this selector to your actual button container
    initializeButtonState(item);
});

// Function to check profile
function checkProfile() {
    // Redirect to the profile page
    window.location.href = 'profile.html'; // Change this URL to your actual profile page URL
}

// Function to logout
function logout() {
    // Redirect to the login page
    window.location.href = 'Login.html'; // Change this URL to your actual login page URL
}

// Function to go home
function goHome() {
    // Redirect to the dashboard
    window.location.href = 'dashboard.html'; // Change this URL to your actual dashboard page URL
}

// Function to handle the home button click
document.querySelector('.home-button').addEventListener('click', function() {
    // Optionally, you can also save the state or perform other actions here
    // For example, you can log the current state
    console.log('Current button state:', localStorage.getItem('buttonState'));
    goHome(); // Call the goHome function to navigate
});
