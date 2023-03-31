import React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/MovieCollection">Movie Collection</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
