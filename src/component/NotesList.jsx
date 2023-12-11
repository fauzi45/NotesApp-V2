import React from "react";
import NotesItem from "./NotesItem";
import PropTypes from 'prop-types';

function NotesList ({ listNotes}) {
    return(
        <>
            { listNotes.length !== 0 ?
                <div className="notes-list">
                {
                    listNotes.map(item => (
                        <NotesItem key={item.id} note={item} />
                    ))
                }
                </div> :
                <p className="notes-list__empty-message">No notes here.</p>
            }
        </>
    )
}

NotesList.proptypes = {
    listNotes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default NotesList;