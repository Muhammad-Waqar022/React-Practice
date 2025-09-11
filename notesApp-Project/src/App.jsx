import "./App.css";
import NotesList from "./Components/NotesList";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [notes, setNotes] = useState(() => {
  const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
  if (savedNotes) {
    return savedNotes;   
  } else {
    return [
      {
        id: nanoid(),
        text: "This is my first note!",
        date: "5/04/2025",
      },
      {
        id: nanoid(),
        text: "This is my Second note!",
        date: "10/04/2025",
      },
    ];
  }
});

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

useEffect(() => {
  localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
}, [notes]);

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
