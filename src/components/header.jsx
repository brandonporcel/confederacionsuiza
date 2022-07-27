import React from "react";
import "./styles.css";

function Header() {
  return (
    <div className="header">
      <div className="navLogo">
        <a href="#">
          <img src="hl2_logo.png" alt="Logo de la Institución" width="100px" />
        </a>
        <h1>Confederación Suiza</h1>
      </div>
      <div className="navBar">
        <ul>
          <li>
            <a href="#">Institucional</a>
          </li>
          <li>
            <a href="#">Especialidades</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
