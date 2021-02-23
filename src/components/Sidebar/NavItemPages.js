import React from "react";
import "../app.css";

function NavItemPages() {
  return (
    <li className="nav-item">
      <a className="nav-link collapsed" href="/">
        <i className="fas fa-fw fa-folder"></i>
        <span>Pages</span>
      </a>
    </li>
  );
}

export default NavItemPages;
