import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ArsipPage from "../pages/ArsipPage";
import DetailPage from "../pages/DetailPage";
import NotesHeader from "./NotesHeader";
import AddPage from "../pages/AddPage";
import NotFound from "../pages/NotFound";

function AppNotes() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to="/">NotesApp</Link>
        </h1>
        <NotesHeader/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/arsip" element={<ArsipPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default AppNotes;
