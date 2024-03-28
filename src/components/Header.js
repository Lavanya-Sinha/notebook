import React from 'react'

function Header({ handleDarkMode }) {
  return (
    <div className='header'>
      <h1>NoteBook</h1>
      <button onClick={()=>handleDarkMode((prevDarkMode)=> !prevDarkMode)} className='save'>Change Theme</button>
    </div>
  )
}

export default Header
