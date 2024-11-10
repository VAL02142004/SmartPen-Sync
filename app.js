import React, { useState, useEffect } from 'react';
import NoteList from './components/NoteList';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('/api/notes');
      const data = await response.json();
      setNotes(data);
    };

    fetchNotes();
  }, []);

  return (  
    <div>
      <h1>Smartpen Sync</h1>
      <NoteList notes={notes} />
    </div>
  );
}

export default App;