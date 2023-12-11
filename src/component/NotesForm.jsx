import React,{useState} from "react";
import { Toast } from "./NotesAlert";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";
import NotesAddPageAction from "./Action/NotesAddPageAction";
import PropTypes from 'prop-types'

function NotesForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    body: '',
    BodyLength: '',
  });

  const onTitleEventChangeHandler = (event) => {
    setForm((data) => ({ ...data, title: event.target.value }))
  };

  const onBodyEventChangeHandler = (event) => {
    if (event.target.value.length <= 50) {
        setForm((data) => ({ ...data, body: event.target.value, BodyLength: event.target.value.length }))
    } else {
      Toast.fire({
        icon: "error",
        title: "Karakter tidak boleh melebihi 50",
      });
    }
  };

  const onSubmitEventHandler = (event) => {
    const { title } = form
    const { body } = form
    if (form.title === "") {
      Toast.fire({
        icon: "error",
        title: "Title tidak boleh kosong",
      });
    } else if (form.body === "") {
      Toast.fire({
        icon: "error",
        title: "Deksripsi tidak boleh kosong",
      });
    } else {
      addNote({ title, body });
      navigate("/");
      Toast.fire({
        icon: "success",
        title: "Notes berhasil ditambahkan",
      });
    }
  };

  return (
    <>
      <section className="add-new-page">
        <div className="add-new-page__input">
          <div className="note-input__title__char-limit">
            Sisa Karakter : {50 - form.BodyLength}
          </div>
          <form onSubmit={onSubmitEventHandler}>
            <input
              className="add-new-page__input__title"
              type="text"
              name="title"
              placeholder="Judul Notes..."
              value={form.title}
              onChange={onTitleEventChangeHandler}
            />
            <textarea
              className="add-new-page__input__body"
              name="body"
              placeholder="Deksripsi..."
              value={form.body}
              onChange={onBodyEventChangeHandler}
            ></textarea>
            <NotesAddPageAction handleSave={onSubmitEventHandler}/>
          </form>
        </div>
      </section>
    </>
  );
}

export default NotesForm;
