import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <div>
        <h1>Bookstore CMS</h1>
        <ul>
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
      <div>
        <img src="" alt="user pic"/>
      </div>
    </nav>
  )
}
