import './App.css'
import NotesList from './Components/NotesList'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {
  const [notes, setNotes] =useState([
    {
    id:nanoid(),
    text: "This is my first note!",
    date: "5/04/2025"
  },
    {
    id:nanoid(),
    text: "This is my Second note!",
    date: "10/04/2025"
  },
    {
    id:nanoid(),
    text: "This is my Third note!",
    date: "16/04/2025"
  },
    {
    id:nanoid(),
    text: "This is my Fourth note!",
    date: "17/04/2025"
  },
    {
    id:nanoid(),
    text: "This is my Fifth note!",
    date: "25/04/2025"
  },
    {
    id:nanoid(),
    text: "This is my new note!",
    date: "30/04/2025"
  },
])
  return (
    <div className='container'>
     <NotesList notes={notes}/>
    </div>
  )
}

export default App
