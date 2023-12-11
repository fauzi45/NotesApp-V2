import React from "react";
import { Link, useLocation } from "react-router-dom";
function NotesHeader() {
  const { pathname } = useLocation();
  return (
    <nav className="navigation">
      <ul>
        <li>
          {pathname !== "/arsip" ? (
            <Link to="/arsip" title="Arsip">
              Arsip
            </Link>
          ) : (
            <Link to="/" title="Aktif">
              Aktif
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default NotesHeader;
