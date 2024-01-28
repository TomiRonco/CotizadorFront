import React from "react";

const Navbars = () => {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-center align-items-center text-center border-bottom border-2 border-primary customNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://cotizadahoyback-bqjv.onrender.com/update-uva"
            target="_blank"
            rel="noopener noreferrer"
          >
            UVA Histórico
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://cotizadahoyback-bqjv.onrender.com/update-dollar"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dólar Histórico
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbars;
