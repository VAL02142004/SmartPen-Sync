
function toggleButtons(item, enable) {
    const enableButton = item.querySelector('.enable');
    const disableButton = item.querySelector('.disable');
    if (enable) {
        enableButton.style.backgroundColor = '#E27D60';
        enableButton.style.color = '#fff';
        disableButton.style.backgroundColor = '#fff';
        disableButton.style.color = '#E27D60';
    } else {
        enableButton.style.backgroundColor = '#fff';
        enableButton.style.color = '#E27D60';
        disableButton.style.backgroundColor = '#E27D60';
        disableButton.style.color = '#fff';
    }
}

function checkProfile() {
    alert("Profile checked!");
}

function logout() {
    alert("Logged out!");
}

function goHome() {
    alert("Going back to Dashboard!");
}
