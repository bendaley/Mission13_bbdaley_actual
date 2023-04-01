import React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="d-flex justify-content-end mr-3">
        <Link to="/" className="mx-3">
          Home
        </Link>
        <Link to="/Podcast" className="mx-3">
          Podcast
        </Link>
        <Link to="/MovieCollection" className="mx-3">
          Movie Collection
        </Link>
      </nav>
      <br></br>
    </div>
  );
}

export default Navbar;
