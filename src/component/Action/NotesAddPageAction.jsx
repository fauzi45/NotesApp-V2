import React from 'react'
import PropTypes from 'prop-types'
import { HiCheck } from 'react-icons/hi'
import NotesPageAction from './NotesPageAction'

function NotesAddPageAction({ handleSave }) {
  return (
    <NotesPageAction page="add-new-page">
      <>
        <button
          className="action"
          type="button"
          title="Tambah"
          onClick={() => handleSave()}
        >
          <HiCheck />
        </button>
      </>
    </NotesPageAction>
  )
}

NotesAddPageAction.propTypes = {
  handleSave: PropTypes.func.isRequired
}

export default NotesAddPageAction