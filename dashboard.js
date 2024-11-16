
document.addEventListener("DOMContentLoaded", function() {
    // Create search bar
    const searchBar = document.createElement('div');
    searchBar.className = 'search-bar';
    searchBar.style.display = 'flex';
    searchBar.style.justifyContent = 'center';
    searchBar.style.alignItems = 'center';
    searchBar.style.margin = '20px';

    const searchInput = document.createElement('input');
    searchInput.placeholder = 'Search';
    searchInput.type = 'text';
    searchInput.style.width = '80%';
    searchInput.style.padding = '10px';
    searchInput.style.border = '2px solid #ff7f50';
    searchInput.style.borderRadius = '25px';
    searchInput.style.fontSize = '16px';

    const menuIcon = document.createElement('i');
    menuIcon.className = 'fas fa-bars menu-icon';
    menuIcon.style.fontSize = '24px';
    menuIcon.style.color = '#ff7f50';
    menuIcon.style.marginLeft = '10px';

    searchBar.appendChild(searchInput);
    searchBar.appendChild(menuIcon);
    document.body.appendChild(searchBar);

    // Create folder container
    const folderContainer = document.createElement('div');
    folderContainer.className = 'folder-container';
    folderContainer.style.display = 'flex';
    folderContainer.style.flexWrap = 'wrap';
    folderContainer.style.justifyContent = 'center';
    folderContainer.style.gap = '20px';
    folderContainer.style.margin = '20px';
    folderContainer.style.position = 'relative';
    folderContainer.style.zIndex = '1';

    const folderNames = ['Dairy', 'Quiz 2', 'Happy', 'Important', 'Oral', 'My notes', 'Quiz note', 'assignment'];

    folderNames.forEach(name => {
        const folder = document.createElement('div');
        folder.className = 'folder';
        folder.style.width = '100px';
        folder.style.height = '100px';
        folder.style.backgroundColor = '#ff7f50';
        folder.style.borderRadius = '10px';
        folder.style.display = 'flex';
        folder.style.justifyContent = 'center';
        folder.style.alignItems = 'center';
        folder.style.position = 'relative';

        const folderLabel = document.createElement('span');
        folderLabel.style.color = '#fff';
        folderLabel.style.fontWeight = 'bold';
        folderLabel.style.position = 'absolute';
        folderLabel.style.bottom = '10px';
        folderLabel.textContent = name;

        const folderTop = document.createElement('div');
        folderTop.style.content = '';
        folderTop.style.width = '60%';
        folderTop.style.height = '20px';
        folderTop.style.backgroundColor = '#ffb6a0';
        folderTop.style.position = 'absolute';
        folderTop.style.top = '10px';
        folderTop.style.borderRadius = '5px 5px 0 0';

        folder.appendChild(folderLabel);
        folder.appendChild(folderTop);
        folderContainer.appendChild(folder);
    });

    document.body.appendChild(folderContainer);

    // Create logo
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.style.width = '100%';
    logo.style.height = '100%';
    logo.style.background = "url('SMARTPEN_SYNC-removebg-preview 1 (1).png') no-repeat center center";
    logo.style.backgroundSize = 'contain';
    logo.style.position = 'absolute';
    logo.style.top = '50%';
    logo.style.left = '50%';
    logo.style.transform = 'translate(-50%, -50%)';
    logo.style.zIndex = '0';
    logo.style.opacity = '1';

    document.body.appendChild(logo);
});
