import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils/data";
import {
  archiveNote,
  deleteNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";
import { Toast } from "../component/NotesAlert";
import NotesDetailPageAction from "../component/Action/NotesDetailPageAction";

function DetailPage() {
  const [note, setNote] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const handleArchive = () => {
    if (note.archived) {
      Toast.fire({
        icon: "success",
        title: "Notes berhasil Diaktifkan",
      });
      unarchiveNote(id);
      navigate("/arsip");
    } else {
      Toast.fire({
        icon: "success",
        title: "Notes berhasil Diarsipkan",
      });
      archiveNote(id);
      navigate("/");
    }
  };

  const handleDelete = () => {
    Toast.fire({
      icon: "success",
      title: "Notes berhasil Dihapus",
    });
    deleteNote(id);
    navigate("/");
  };

  useEffect(() => {
    const showNote = getNote(id);
    if (showNote) {
      setNote(showNote);
    }
  }, []);

  return (
    <section className="detail-page">
      {"id" in note ? (
        <>
          <Link to="/" title="Kembali">
            {" "}
            Kembali
          </Link>
          <h3 className="detail-page__title">{note.title}</h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(note.createdAt)}
          </p>
          <div className="detail-page__body">{note.body}</div>
        </>
      ) : (
        <p className="notes-list__empty-message">No notes here.</p>
      )}
      <NotesDetailPageAction
      archived={note.archived || false}
      handleArchive={handleArchive}
      handleDelete={handleDelete}
      />
    </section>
  );
}
export default DetailPage;
