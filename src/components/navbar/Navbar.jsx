import React, { useState } from 'react';
import '../navbar/Navbar.css';
import { IoBookOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const closeMenu = () => {
  setMenuOpen(false);
};
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
        <NavLink to="/submissions">
        <button className="submit-btn">Submit Paper</button>
        </NavLink>

      </div>
     <div className="hamburger">
  {menuOpen ? (
    <IoCloseCircleOutline
      className="ham-icon close"
      onClick={() => setMenuOpen(false)}
    />
  ) : (
    <RxHamburgerMenu
      className="ham-icon open"
      onClick={() => setMenuOpen(true)}
    />
  )}
</div>
       <nav className={`nav-links mobile-nav-links ${menuOpen ? "show" : ""}`}>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/archive" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Archive
          </NavLink>

          <NavLink to="/submissions" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Submissions
          </NavLink>

          <NavLink to="/guidelines" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Guidelines
          </NavLink>

          <NavLink to="/editorial-board" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Editorial Board
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""} onClick={closeMenu}>
            Contact
          </NavLink>

          {/* CTA Button */}
        <NavLink to="/submissions" onClick={closeMenu}>
        <button className="submit-btn mobile-submit-btn">Submit Paper</button>
        </NavLink>
        </nav>

    </div>
  )
}

export default Navbar;