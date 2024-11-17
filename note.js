
document.addEventListener("DOMContentLoaded", function() {
    // Create header
    const header = document.createElement("div");
    header.className = "header";
    document.body.appendChild(header);

    // Create search input
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Search";
    searchInput.style.cssText = "flex-grow: 1; padding: 10px; border: 2px solid #ff7f50; border-radius: 20px; font-size: 16px; color: #ff7f50; width: calc(100% - 40px);";
    header.appendChild(searchInput);

    // Create search icon
    const searchIcon = document.createElement("i");
    searchIcon.className = "fas fa-search";
    searchIcon.style.cssText = "margin-left: -30px; color: #ff7f50;";
    header.appendChild(searchIcon);

    // Create menu icon
    const menuIcon = document.createElement("i");
    menuIcon.className = "fas fa-bars";
    menuIcon.style.cssText = "margin-left: 10px; font-size: 24px; color: #ff7f50;";
    header.appendChild(menuIcon);

    // Create sidebar
    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";
    document.body.appendChild(sidebar);

    // Create home icon
    const homeIcon = document.createElement("i");
    homeIcon.className = "fas fa-home";
    homeIcon.style.cssText = "font-size: 40px; color: #ff7f50;";
    sidebar.appendChild(homeIcon);

    // Create content
    const content = document.createElement("div");
    content.className = "content";
    document.body.appendChild(content);

    // Create notes
    for (let i = 0; i < 20; i++) {
        const note = document.createElement("div");
        note.className = "note";
        note.contentEditable = "true";
        note.style.cssText = "background-color: #ffdab9; border: 2px solid #ff7f50; height: 50px; margin-bottom: 10px; padding: 10px; overflow: auto;";
        content.appendChild(note);
    }
});
