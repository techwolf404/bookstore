import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
  </header>
);

export default Header;
