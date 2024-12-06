function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function saveNote() {
    const noteText = document.getElementById('noteText').value;
    alert('Note saved: ' + noteText);
}

function openSetting() {
    alert('Settings clicked');
}

function openProfile() {
    alert('Profile clicked');
}

function logout() {
    alert('Logged out');
}
