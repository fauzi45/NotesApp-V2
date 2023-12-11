import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import NotesPageAction from "./NotesPageAction";
import PropTypes from "prop-types";

function NotesDetailPageAction({ archived, handleArchive, handleDelete }) {
  return (
    <NotesPageAction page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title={archived ? "Aktifkan" : "Arsipkan"}
          onClick={() => handleArchive()}
        >
          {archived ? <BiArchiveOut /> : <BiArchiveIn />}
        </button>
        <button
          className="action"
          type="button"
          title="Hapus"
          onClick={() => handleDelete()}
        >
          <HiOutlineTrash />
        </button>
      </>
    </NotesPageAction>
  );
}

NotesDetailPageAction.propTypes = {
  archived: PropTypes.bool.isRequired,
  handleArchive: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default NotesDetailPageAction;
