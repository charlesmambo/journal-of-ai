import React from 'react';
import '../ed/Ed.css';

const Ed = () => {
const advisors = [
  {
    initial: "A",
    name: "Prof. Sylvester Arnab",
    org: "Coventry University, UK",
  },
  {
    initial: "K",
    name: "Festo Kayima",
    org: "NTNU — festo.kayima@ntnu.no",
  },
  {
    initial: "B",
    name: "Prof. Michael J. Bossé",
    org: "Appalachian State University, USA",
  },
  {
    initial: "M",
    name: "Prof. Sibusiso Moyo",
    org: "Stellenbosch University, South Africa",
  },
  {
    initial: "P",
    name: "Dr Peter Pluddemann",
    org: "University of the Western Cape, South Africa",
  },
  {
    initial: "R",
    name: "Prof. Umesh Ramnarain",
    org: "University of Johannesburg, South Africa",
  },
  {
    initial: "K",
    name: "Prof. Rajaratnam Kanshukan",
    org: "Stellenbosch University, South Africa",
  },
  {
    initial: "T",
    name: "Dr Daniela Tîrnovan",
    org: "University of South Alabama, USA",
  },
  {
    initial: "D",
    name: "Dr Kathleen Lynch Davis",
    org: "Texas A&M University-Corpus Christi, USA",
  },
  {
    initial: "M",
    name: "Prof. Doug McDougall",
    org: "OISE, University of Toronto, Canada",
  },
  {
    initial: "P",
    name: "Prof. Francesco Petruccione",
    org: "Stellenbosch University, South Africa",
  },
  {
    initial: "S",
    name: "Prof. David Sumpter",
    org: "Uppsala University, Sweden",
  },
];

const team = [
  {
    initial: "H",
    name: "Dr Ibrahim Harun",
    role: "Managing Editor",
    org: "University of the Western Cape, South Africa",
  },
  {
    initial: "E",
    name: "Section Editor",
    role: "Section Editor",
    org: "To be appointed",
  },
  {
    initial: "E",
    name: "Production Editor",
    role: "Production Editor",
    org: "To be appointed",
  },
];
  return (
    <div>
        <section className="ed-hero">
      <div className="ed-container">
        <span className="label">EDITORIAL BOARD</span>

        <h2 className="">
          The team behind JAI-PTD.
        </h2>

        <p className="ed-description">
          A diverse, international editorial team committed to rigorous,
          transparent and inclusive scholarship.
        </p>
      </div>
    </section>

    <section className="team-section">
      {/* LEADERSHIP */}
      <div className="tm-header">
        <span className="label">LEADERSHIP</span>
        <h2>Editor-in-Chief</h2>
      </div>

      <div className="chief-card">
        <div className="ch-avatar large">AB</div>

        <div className="chief-content">
          <h3>Prof. Anass Bayaga</h3>
          <span className="chief-text">Editor-in-Chief</span>
          <p className="meta">
            Faculty of Education · Stellenbosch University
          </p>

          <p className="tm-description">
            Provides overall academic leadership and strategic direction for
            JAI-PTD. Makes final decisions on acceptance, revision or rejection
            of manuscripts, and ensures the journal's operations align with its
            aims, scope and ethical commitments. Contact: abayaga@sun.ac.za.
          </p>
        </div>
      </div>

      {/* ADVISORY BOARD */}
      <div className="tm-header mt">
        <span className="label">ADVISORY BOARD</span>
        <h2>Strategic guidance & oversight</h2>
      </div>

      <div className="grid">
        {advisors.map((item, i) => (
          <div key={i} className="card">
            <div className="ch-avatar">{item.initial}</div>
            <h4 className='tm-sub-title'>{item.name}</h4>
            <span className="tm-role">Advisory Board</span>
            <p className="meta">{item.org}</p>
          </div>
        ))}
      </div>
    
     <div className="edt-team">
      <div className="tm-header mt">
        <span className="label">Journal Management</span>
        <h2>Editorial team</h2>
      </div>

        <div className="grid edt-card">
          {team.map((member, i) => (
            <div key={i} className="card">
              <div className="ch-avatar">{member.initial}</div>

              <h4 className='tm-sub-title'>{member.name}</h4>
              <span className="tm-role">{member.role}</span>

              <p className="meta">{member.org}</p>
            </div>
          ))}
        </div>
        <p className="tm-footnote">
          Additional Associate Editors are appointed to ensure disciplinary,
          geographical and demographic diversity across AI, data science,
          education, governance and development.
        </p>
        </div>
    </section>
    </div>
  )
}

export default Ed