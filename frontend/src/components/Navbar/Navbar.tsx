import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          My videos
        </Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/new-video">
            Create new-video
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
