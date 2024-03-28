import React, { useState } from 'react'

function AddNotes(props) {
    let[noteText, setNoteText] = useState('')
    let charecterLimit = 200
    function handleChange(event){
        if(charecterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value)
        }

    }
    function handleSaveClick(){
        if(noteText.trim().length > 0){
            setNoteText('')
            return(
               
                   props.handleAddNote(noteText)
            )

        }
    }
  return (
    <div className='note new'>
      <textarea placeholder=" Type to add a new note..." cols="10" rows="8" value={noteText} onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{charecterLimit - noteText.length} remaining...</small>
        <button className='save' onClick={handleSaveClick}>Save</button>
        <small>{props.noteId}</small>
      </div>
    </div>
  )
}

export default AddNotes
