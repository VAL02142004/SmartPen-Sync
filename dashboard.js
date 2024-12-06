// Load existing folders from localStorage when the page loads
window.onload = function() {
    loadFolders();
};

function openSetting() {
    // Redirect to the settings page
    window.location.href = "Setti.html"; // Change to your actual settings page URL
}

function openProfile() {
    // Redirect to the profile page
    window.location.href = "profile.html"; // Change to your actual profile page URL
}

function logout() {
    // Redirect to the login page
    window.location.href = "login.html"; // Change to your actual login page URL
}

function toggleDropdown() {
    var dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function openFolder(folderName) {
    // Redirect to the notes page for the specific folder
    window.location.href = "note.html?folder=" + encodeURIComponent(folderName); // Change to your actual notes page URL
}

function addFolder() {
    var folderName = prompt("Enter folder name:");
    if (folderName) {
        // Save the folder name to localStorage
        saveFolder(folderName);
        // Add the folder to the grid
        addFolderToGrid(folderName);
    } else {
        alert("Please enter a folder name");
    }
}

function saveFolder(folderName) {
    // Get existing folders from localStorage
    let folders = JSON.parse(localStorage.getItem('folders')) || [];
    // Add the new folder if it doesn't already exist
    if (!folders.includes(folderName)) {
        folders.push(folderName);
        localStorage.setItem('folders', JSON.stringify(folders));
    }
}

function loadFolders() {
    // Load folders from localStorage and display them
    let folders = JSON.parse(localStorage.getItem('folders')) || [];
    folders.forEach(folder => {
        addFolderToGrid(folder);
    });
}

function addFolderToGrid(folderName) {
    var gridContainer = document.getElementById("gridContainer");
    var newFolder = document.createElement("div");
    newFolder.className = "grid-item";
    newFolder.innerText = folderName;
    newFolder.onclick = function() {
        openFolder(folderName);
    };
    gridContainer.appendChild(newFolder);
}

function filterFolders() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var gridItems = document.getElementsByClassName("grid-item");

    // Loop through all grid items and hide those that don't match the search query
    for (var i = 0; i < gridItems.length; i++) {
        var folderName = gridItems[i].innerText.toLowerCase();
        if (folderName.includes(input)) {
            gridItems[i].style.display = ""; // Show the item
        } else {
            gridItems[i].style.display = "none"; // Hide the item
        }
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.menu-icon, .menu-icon *')) {
        var dropdown = document.getElementById("dropdownMenu");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
