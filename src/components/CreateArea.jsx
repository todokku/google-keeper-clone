import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = e => {
    const { name, value } = e.target
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    });
  }

  const submitNote = e => {
    e.preventDefault();
    
    props.onAdd(note.title, note.content);

    setNote({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form className="create-note">
        <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          value={note.title} 
        />
        <textarea 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={note.content} 
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
