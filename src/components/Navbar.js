import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/navbar.css';

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="linkNavbar flex">
        <h1>Bookstore CMS</h1>
        <ul className="ulNavbar">
          <li>
            <NavLink
              className="link"
              to="/"
              style={({ isActive }) => (isActive ? { color: 'black' } : { color: '#a4a4a4' })}
            >
              BOOKS
            </NavLink>
          </li>
          <li>
            <NavLink
              className="link"
              to="/categories"
              style={({ isActive }) => (isActive ? { color: 'black' } : { color: '#a4a4a4' })}
            >
              CATEGORIES
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="userPic">
        <img src="https://img.icons8.com/color/512/test-account.png" alt="user pic" />
      </div>
    </nav>
  );
}
