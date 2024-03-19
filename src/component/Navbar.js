import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="!#">
        Dashboard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item border rounded">
            <a className="nav-link text-white" href="#">
              <i className="bi bi-search"></i> Search
            </a>
          </li>

          <li className="nav-item mx-1 border rounded">
            <a className="nav-link text-white" href="#">
              Account
            </a>
          </li>

          <li className="nav-item border rounded">
            <a className="nav-link text-white" href="#">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
