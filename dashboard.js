
javascript
document.addEventListener("DOMContentLoaded", function() {
    // Create and style the search bar
    const searchBar = document.createElement('div');
    searchBar.style = 'margin: 20px; display: flex; align-items: center; border: 2px solid #ff7f50; border-radius: 25px; padding: 5px 10px; width: 90%; max-width: 300px;';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search';
    searchInput.id = 'searchInput';
    searchInput.style = 'border: none; outline: none; flex-grow: 1; padding: 5px; font-size: 16px;';
    searchInput.onkeyup = filterNotes;
    
    const searchIcon = document.createElement('i');
    searchIcon.className = 'fas fa-search';
    searchIcon.style = 'color: #ff7f50; font-size: 20px;';
    
    const menuIcon = document.createElement('i');
    menuIcon.className = 'fas fa-bars menu-icon';
    menuIcon.style = 'margin-left: 10px;';
    
    searchBar.appendChild(searchInput);
    searchBar.appendChild(searchIcon);
    searchBar.appendChild(menuIcon);
    document.body.appendChild(searchBar);
    
    // Create and style the notes container
    const notesContainer = document.createElement('div');
    notesContainer.id = 'notesContainer';
    notesContainer.style = 'display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; padding: 10px; width: 100%;';
    document.body.appendChild(notesContainer);
    
    // Function to create a note
    function createNote(text) {
        const note = document.createElement('div');
        note.className = 'note';
        note.style = 'background-color: #ff7f50; width: 45%; max-width: 100px; height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 10px; color: white; font-weight: bold; text-align: center;';
        
        const noteHeader = document.createElement('div');
        noteHeader.className = 'note-header';
        noteHeader.style = 'background-color: #ffa07a; width: 60%; height: 20px; border-radius: 5px; margin-bottom: 10px;';
        
        const noteText = document.createElement('span');
        noteText.className = 'note-text';
        noteText.textContent = text;
        
        note.appendChild(noteHeader);
        note.appendChild(noteText);
        
        return note;
    }
    
    // Add initial notes
    const initialNotes = ['Dairy', 'Quiz 2', 'Happy', 'Important', 'Oral', 'My notes', 'Quiz note', 'assignment'];
    initialNotes.forEach(noteText => {
        notesContainer.appendChild(createNote(noteText));
    });
    
    // Add the plus icon note
    const plusNote = createNote('');
    const plusIcon = document.createElement('i');
    plusIcon.className = 'fas fa-plus';
    plusIcon.style = 'font-size: 24px; cursor: pointer;';
    plusIcon.onclick = addNote;
    plusNote.appendChild(plusIcon);
    notesContainer.appendChild(plusNote);
    
    // Function to filter notes
    function filterNotes() {
        const searchInput = document.getElementById('searchInput').value.toLowerCase();
        const notes = document.getElementsByClassName('note');
        
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            const noteText = note.textContent || note.innerText;
            
            if (noteText.toLowerCase().indexOf(searchInput) > -1) {
                note.style.display = "";
            } else {
                note.style.display = "none";
            }
        }
    }
    
    // Function to add a new note
    function addNote() {
        const newNote = createNote('New Note');
        const editIcon = document.createElement('i');
        editIcon.className = 'fas fa-edit';
        editIcon.style = 'font-size: 16px; cursor: pointer;';
        editIcon.onclick = renameNewNote;
        newNote.appendChild(editIcon);
        notesContainer.insertBefore(newNote, plusNote);
    }
    
    // Function to rename a new note
    function renameNewNote() {
        const noteTextElement = this.previousElementSibling;
        const newName = prompt("Enter new name for the note:", noteTextElement.textContent);
        if (newName !== null && newName.trim() !== "") {
            noteTextElement.textContent = newName;
            this.onclick = null; // Disable renaming after the first time
        }
    }
});
``
