import React from 'react';
import '../navbar/Navbar.css';
import { IoBookOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <NavLink to="/" className='logo-text'>
        <div className="logo">
          <div className="logo-icon"><IoBookOutline /></div>
          <div className="logo-text">
            <span className="logo-title">JAI-PTD</span>
            <span className="logo-subtitle">JOURNAL OF AI</span>
          </div>
        </div>
        </NavLink>

        {/* Navigation */}
        <nav className="nav-links">
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About
          </NavLink>

          <NavLink to="/archive" className={({ isActive }) => isActive ? "active" : ""}>
            Archive
          </NavLink>

          <NavLink to="/submissions" className={({ isActive }) => isActive ? "active" : ""}>
            Submissions
          </NavLink>

          <NavLink to="/guidelines" className={({ isActive }) => isActive ? "active" : ""}>
            Guidelines
          </NavLink>

          <NavLink to="/editorial-board" className={({ isActive }) => isActive ? "active" : ""}>
            Editorial Board
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <button className="submit-btn">Submit Paper</button>

      </div>
    </div>
  )
}

export default Navbar;