import React from "react";
import { Link } from "react-router-dom";
import "./header.css"

function logout()
{
	localStorage.clear();
	window.location = "/";
}

function Header() {
  return (
    <div>
      <nav className="navbar navbar-default" width="100%">
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
		{["add","attendance","effort","progress"].map((d,i) => (
			<Link to={"/"+d} key={d}>
				<button
				type="button"
				className="btn btn-primary btn-sm float-right my-3"
				id="btn"
				>
					{d.charAt(0).toUpperCase() + d.slice(1)}
				</button>
			</Link>
		))}
		<button
			type="button"
			className="btn btn-primary btn-sm float-right my-3"
			id="btn"
			onClick={logout}>
			Logout
		</button>
      </nav>
    </div>
  );
}

export default Header;
