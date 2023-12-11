import React from "react";
import { showFormattedDate } from "../utils/data";
import { Link } from "react-router-dom";
import parser from 'html-react-parser';
import PropTypes from 'prop-types';

const NotesItem = ({ note }) => {
  return (
    <div className="note-item">
      <h3 className="note-item__title">
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </h3>
      <p className="note-item__createdAt">{showFormattedDate(note.createdAt)}</p>
      <p className="note-item__body">{parser(note.body)}</p>
    </div>
  );
};

NotesItem.proptypes = {
  note: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NotesItem;
