import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import ExistingNotes from "../notes";

function App() {
  const [notes, setNotes] = useState(ExistingNotes);

  const addNote = (newTitle, newContent) => {
    const note = {
      title: newTitle,
      content: newContent
    };

    setNotes(prevNotes => {
      return [
        ...prevNotes,
        note
      ]
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) => {
        return (
          <Note 
            key={index} 
            id={index}
            title={note.title} 
            content={note.content} 
          />
        )
      })}
      <Footer />
    </div>
  );
}

export default App;
