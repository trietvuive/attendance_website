import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" width="150%">
        <Link to="/" className="navbar-brand">
          Corelink Student Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
		  position="absolute"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </nav>
    </div>
  );
}

export default Header;
