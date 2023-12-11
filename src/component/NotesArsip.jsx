import React from "react";
import NotesList from "./NotesList";
import PropTypes from 'prop-types';

function NotesArsip({ notes }) {
  return (
    <div className="note-app__body">
      <h2>Catatan Arsip</h2>
      <NotesList listNotes={notes.filter((note) => note.archived)} />
    </div>
  );
}

NotesArsip.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesArsip;
