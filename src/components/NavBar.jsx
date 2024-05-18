import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const NavBar = () => (
  <div className="navbar">
    <ul>
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/add-product">Add Product</Link></li>
      <li><Link to="/chat">Chat</Link></li>
      <li><Link to="/register">Logout</Link></li>
    </ul>
  </div>
);

export default NavBar;

