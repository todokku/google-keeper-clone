import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

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

    setExpanded(false);
  }

  const expand = () => {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          value={note.title} 
        />}
        <textarea 
          onChange={handleChange} 
          onClick={expand}
          name="content" 
          placeholder="Take a note..." 
          rows={isExpanded ? 3 : 1} 
          value={note.content} 
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
