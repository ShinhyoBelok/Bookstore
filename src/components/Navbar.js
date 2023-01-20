import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="linkNavbar">
        <h1>Bookstore CMS</h1>
        <ul className="ulNavbar">
          <li className="link">
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? { color: 'red' } : {})}
            >
              BOOKS
            </NavLink>
          </li>
          <li className="link">
            <NavLink
              to="/categories"
              style={({ isActive }) => (isActive ? { color: 'red' } : {})}
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="userPic">
        <img src="" alt="user pic" />
      </div>
    </nav>
  );
}
