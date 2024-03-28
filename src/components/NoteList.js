import React from 'react'
import Note from './Note'
import AddNotes from './AddNotes';

function NoteList({notes,handleAddNote,deleteNote}) {
  return (
    <div className='notes_list'>
     {
      notes.map((note)=>{
        return (
          <Note key={note.id} text={note.text} date={note.date} deleteNote={deleteNote} id={note.id}/>
          )
        })
       }
       <AddNotes handleAddNote={handleAddNote} noteId={notes.id}/>
      </div>
    )
  }
  
  export default NoteList;
          
          
