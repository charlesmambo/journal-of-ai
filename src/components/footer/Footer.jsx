import React from 'react';
import '../footer/Footer.css';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer_container">
        
        {/* Left Section */}
        <div className="footer_left">
          <NavLink to="/" className='logo-text'>
          <div className="footer_logo">
            <div className="logo_box">
              <HiOutlineBookOpen />
            </div>
            <h2>JAI-PTD</h2>
          </div>
          </NavLink>

          <p className="footer_description">
            The Journal of AI-Powered Technology and Development
            peer-reviewed, open-access scholarship advancing
            responsible AI in education, governance, ethics and
            systems design.
          </p>

          <h4 className="footer_university">
            FACULTY OF EDUCATION  <br />  STELLENBOSCH
            UNIVERSITY  <span>·</span>
            UNIVERSITY OF THE WESTERN CAPE
          </h4>
        </div>

        {/* Middle Section */}
        <div className="footer_links">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <NavLink to="/about">
              About the Journal
              </NavLink>
            </li>
            <li>
              <NavLink to="/editorial-board">
              Editorial Board
              </NavLink>
              </li>
            <li>
              <NavLink to="/archive">
              Archive
              </NavLink>
              </li>
            <li>
              <NavLink to="/submissions">
              Submit Paper
              </NavLink>
              </li>
            <li>
              <NavLink to="/guidelines">
              Guidelines
              </NavLink>
              </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer_contact">
          <h4>Contact</h4>

          <h5>Prof. Anass Bayaga</h5>
          <p>Editor-in-Chief</p>

          <div className="footer_email">
            <MdOutlineMail />
            <span>abayaga@sun.ac.za</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer_bottom">
        <p>© 2026 JAI-PTD. All rights reserved.</p>

        <div className="footer_bottom_links">
          <span className='fbl'>ISSN pending <span>·</span></span>
          <span className='fbl'>Open access <span>·</span></span>         
          <span className='fbl'>Peer-reviewed</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer