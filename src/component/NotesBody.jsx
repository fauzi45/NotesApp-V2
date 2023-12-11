import React from "react";
import NotesList from "./NotesList";
import PropTypes from 'prop-types';

function NotesBody({ notes }) {
    return (
        <div className="note-app__body">
            <h2>Catatan Aktif</h2>
            <NotesList listNotes={notes.filter(note => !note.archived)}/>
        </div>
    )
}

NotesBody.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NotesBody;