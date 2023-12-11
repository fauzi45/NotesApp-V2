import React from 'react'
import { HiPlus } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import NotesPageAction from '../Action/NotesPageAction'

function NotesAction() {
  const navigate = useNavigate()

  return (
    <NotesPageAction page="homepage">
      <button
        className="action"
        type="button"
        title="Tambah"
        onClick={() => navigate('/notes/new')}
      >
        <HiPlus />
      </button>
    </NotesPageAction>
  )
}
export default NotesAction;