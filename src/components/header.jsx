import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <div className="header">
      <div className="navLogo">
        <Link to="/" className="navLogo-ctn">
          <div className="navLogo-img-ctn">
            <img
              src="./images/logo.jpg"
              alt="Logo de la Institución"
              width="100px"
              height="100px"
            />
          </div>
          <div className="navLogo-h2-ctn">
            <h2>Confederación Suiza</h2>
          </div>
        </Link>
      </div>
      <nav className="navList">
        <ul className="navList-ctn">
          <li className="navList-item">
            <Link className="navLinks" to="/institucional">
              Institucional
            </Link>
          </li>
          <li className="navList-item">
            Especialidades
            <ul className="navList-submenu">
              <li className="navList-subItem">Ciclo Básico</li>
              <hr />
              <li className="navList-subItem">Computación</li>
              <hr />
              <li className="navList-subItem">Automor</li>
            </ul>
          </li>
          <li className="navList-item">Contacto</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
