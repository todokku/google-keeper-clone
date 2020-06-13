import React, { useState } from "react";
import { isPropertySignature } from "typescript";

function CreateArea(props) {
  const [noteInput, setNoteInput] = useState({
    title: "",
    content: ""
  });

  const handleChange = e => {
    const { name, value } = e.target
    
    setNoteInput(prevNoteInput => {
      return {
        ...prevNoteInput,
        [name]: value
      }
    });
  }

  const handleClick = e => {
    e.preventDefault();
    
    props.onAdd(noteInput.title, noteInput.content);

    setNoteInput({
      title: "",
      content: ""
    });
  }

  return (
    <div>
      <form>
        <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          value={noteInput.title} 
        />
        <textarea 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={noteInput.content} 
        />
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
