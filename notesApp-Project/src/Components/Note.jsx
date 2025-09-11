import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

const Note = ({id,text,date,handleDeleteNote}) => {
    const handleDelete=()=>{
        handleDeleteNote(id);
    }
  return (
    <div className='note'>
        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <MdDeleteForever onClick={handleDelete} className='delete-icon' size="1.3em"/>
        </div>
    </div>
  )
}

export default Note