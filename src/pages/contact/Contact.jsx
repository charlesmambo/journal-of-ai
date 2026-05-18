import React from 'react';
import '../contact/Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div>
    <section className="contact-section">
      <div className="contact-container">
        <span className="label">CONTACT</span>

        <h2 className="contact-title">
          Get in touch with the editorial
          team.
        </h2>

        <p className="contact-description">
          Questions about submissions, collaboration or editorial
          opportunities?
          We're here to help.
        </p>
      </div>
    </section>

    <section className="ct-wrapper">
      <div className="contact-grid">
        {/* LEFT SIDE */}
        <div className="info-column">
          {/* CARD 1 */}
          <div className="card">
            <div className="ct-icon-box">
              <MdOutlineEmail />
            </div>

            <h3>Editorial Office</h3>

            <p>
              Primary contact for all editorial correspondence,
              manuscript queries, special-issue proposals,
              review service, and permissions.
            </p>

            <div className="contact-item">
              <strong>editorialoffice@jal-ptd.org</strong>
              <span>(placeholder — final journal email TBC)</span>
            </div>

            <div className="contact-item">
              <strong>Website</strong>
              <a href="/">www.jai-ptd.org</a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <div className="ct-icon-box">
              <LuUser />
            </div>

            <h3>Editorial team</h3>

            <div className="team-member">
              <strong>Prof. Anass Bayaga</strong>
              <span>Editor-in-Chief</span>
              <p>abayaga@sun.ac.za</p>
            </div>

            <div className="team-member">
              <strong>Dr Ibrahim Harun</strong>
              <span>Managing Editor</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <div className="ct-icon-box">
              <MdOutlineLocationOn />
            </div>

            <h3>Hosting institution</h3>

            <p>Faculty of Education</p>
            <p>Stellenbosch University, South Africa</p>
            <p>
              Co-published with the University of the Western Cape
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="form-card">
          <h2>Send us a message</h2>

          <form>
            <div className="row">
              <div className="input-group">
                <label>Full name</label>
                <input type="text" />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" />
              </div>
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea rows="7"></textarea>
            </div>

            <button type="submit" className='ct-btn'>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact