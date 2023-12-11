import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import NotesPageAction from "./NotesPageAction";
import PropTypes from "prop-types";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function NotesDetailPageAction({ archived, handleArchive, handleDelete }) {
  const navigate = useNavigate();

  return (
    <NotesPageAction page="detail-page">
      <>
        <button
          className="action"
          type="button"
          title={archived ? "Aktifkan" : "Arsipkan"}
          onClick={() => navigate("/")}
        >
          <IoArrowBack />
        </button>
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
};

export default NotesDetailPageAction;
