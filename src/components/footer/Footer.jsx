import React from 'react';
import '../footer/Footer.css';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer_container">
        
        {/* Left Section */}
        <div className="footer_left">
          <div className="footer_logo">
            <div className="logo_box">
              <HiOutlineBookOpen />
            </div>
            <h2>JAI-PTD</h2>
          </div>

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
            <li>About the Journal</li>
            <li>Editorial Board</li>
            <li>Archive</li>
            <li>Submit Paper</li>
            <li>Guidelines</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer_contact">
          <h4>Contact</h4>

          <h5>Prof. Kazeem Bayega</h5>
          <p>Editor-in-Chief</p>

          <div className="footer_email">
            <MdOutlineMail />
            <span>editor@jaiptd.ac.za</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer_bottom">
        <p>© 2026 JAI-PTD. All rights reserved.</p>

        <div className="footer_bottom_links">
          <span>ISSN pending</span>
          <span>·</span>
          <span>Open access</span>
          <span>·</span>
          <span>Peer-reviewed</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer