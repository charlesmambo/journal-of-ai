import React from 'react';
import '../home/Home.css';
import { IoBookOutline } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { PiGraduationCap } from "react-icons/pi";
import { FiShield } from "react-icons/fi";
import { TiStarburstOutline } from "react-icons/ti";
import { IoHardwareChipOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { TbArrowBadgeDown } from "react-icons/tb";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import SP from '../../assets/sp2.png';
import UO from '../../assets/uo.png';
import UTC from '../../assets/uc.png';
import ST from '../../assets/stn.png';

const Home = () => {
const data = [
  {
    title: "AI in Education",
    desc: "Adaptive learning, equity, and pedagogy in African classrooms.",
    icon: <PiGraduationCap />,
  },
  {
    title: "AI for Governance",
    desc: "Policy, accountability, and public-sector AI deployment.",
    icon: <FiShield />,
  },
  {
    title: "Ethics & Inclusive AI",
    desc: "Fairness, bias, and rights-based AI in diverse contexts.",
    icon: <TiStarburstOutline />,
  },
  {
    title: "AI Systems Design",
    desc: "Human-centered architectures and responsible engineering.",
    icon: <IoHardwareChipOutline />,
  },
];
const cards = [
  {
    icon: <FiUsers />,
    title: "Diverse Editorial Board",
    text: "International scholars across AI, ethics & policy.",
  },
  {
    icon: <TbArrowBadgeDown />,
    title: "Open Access",
    text: "Free to read, free to publish CC-BY licensed.",
  },
  {
    icon: <HiOutlineDocumentCheck />,
    title: "Double-Blind Review",
    text: "Two reviewers, transparent decisions.",
  },
  {
    icon: <FiShield />,
    title: "Institutional Backing",
    text: "Stellenbosch University · University of the Western Cape.",
  },
];

const articles = [
  {
    category: "EDUCATION",
    title: "Predictive Analytics in Educational Outcomes: A Machine Learning Approach",
    description:
      "This study investigates the application of machine learning to forecast learner performance in multilingual African contexts, proposing a scalable model for early intervention.",
    author: "A. Bayaga et al.",
  },
  {
    category: "GOVERNANCE",
    title: "AI Governance Frameworks for Southern Africa: A Policy Synthesis",
    description:
      "We review emerging AI policy across SADC and propose a layered governance framework that balances innovation with rights-based protections.",
    author: "N. Khumalo et al.",
  },
  {
    category: "ETHICS",
    title: "Ethics of Generative AI in the University Classroom",
    description:
      "An ethnographic study of generative AI use across three South African universities, surfacing tensions between productivity, equity, and academic integrity.",
    author: "L. van der Merwe et al.",
  },
];

const pcards = [
    {
      title: 'Stellenbosch University',
      subtitle: 'Faculty of Education',
      dark: false,
    },
    {
      title: 'University of the Western Cape',
      subtitle: 'Co-publisher',
      dark: false,
    },
    {
      title: 'Prof. Anass Bayaga',
      subtitle: 'Editor-in-Chief',
      dark: true,
    },
  ];
const navigate = useNavigate();
  return (
    <main>
        <section className="hero">
      <div className="hero-container">
        
        {/* Top Badge */}
        {/* <div className="badge">
          • VOLUME 1 · ISSUE 1 — NOW OPEN
        </div> */}

        {/* Heading */}
        <h1 className="hero-title">
          Journal of <span>AI-Powered</span><br />
          Technology and<br />
          Development
        </h1>

        {/* Description */}
        <p className="hero-desc">
          A peer-reviewed, open-access journal advancing rigorous research on
          responsible AI published by Stellenbosch University and the
          University of the Western Cape.
        </p>

        {/* Actions */}
        <div className="hero-actions">
          
          <button className="btn primary" onClick={() => navigate("/submissions")}>
            Submit Paper <IoIosArrowRoundForward className='primary-btn-icon'/>
          </button>


          <button className="btn secondary" onClick={() => navigate("/archive")}>
            <IoBookOutline />
             Browse Articles
          </button>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat">
            <span className="home-label">REVIEW TIME</span>
            <span className="home-value">6–8 weeks</span>
          </div>

          <div className="stat">
            <span className="home-label">ACCESS</span>
            <span className="home-value">Open</span>
          </div>

          <div className="stat">
            <span className="home-label">CO-PUBLISHERS</span>
            <span className="home-value">2 universities.</span>
          </div>

          <div className="stat">
            <span className="home-label">REVIEWED</span>
            <span className="home-value">Peer</span>
          </div>
        </div>

      </div>
    </section>

    <section className="focus">
      <div className="focus-container">

        {/* Header */}
        <div className="focus-header">
          <span className="label">SCOPE</span>
          <h2>Key focus areas</h2>
          <p>
            We publish original research across four interconnected domains shaping
            the future of AI in Africa and beyond.
          </p>
        </div>

        {/* Cards */}
        <div className="focus-grid">
          {data.map((item, index) => (
            <div className="card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>

     <section className="journal-section">
      <div className="journal-container">
        <div className="journal-left">
          <span className="eyebrow">ABOUT THE JOURNAL</span>

          <h2>
            Rigorous scholarship for
            <br />
            the AI era.
          </h2>

          <p>
            JAI-PTD provides a peer-reviewed forum for original research on
            the intersection of artificial intelligence, education,
            governance and ethics with a deliberate focus on the African
            research landscape.
          </p>
          
          <NavLink to="/about" className="read-more">
            Read More <IoIosArrowRoundForward className='primary-btn-icon'/>
          </NavLink>
        </div>

        <div className="journal-right">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-icon">{card.icon}</div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="articles-section">
      <div className="articles-header">
        <div>
          <p className="label">CURRENT ISSUE</p>
          <h2>Latest articles</h2>
          <p className="subtext">Volume 1 · Issue 1 — May 2026</p>
        </div>

        <button className="archive-btn" onClick={() => navigate("/archive")}>
          View archive <IoIosArrowRoundForward className='primary-btn-icon'/>
        </button>
      </div>

      <div className="articles-grid">
        {articles.map((item, index) => (
          <div className="card" key={index}>
            <p className="category">{item.category}</p>
            <h3 className='why-this'>{item.title}</h3>
            <p className="desc">{item.description}</p>

            <div className="card-footer">
              <span className="author">{item.author}</span>
              <button className="read-btn">
                Read <IoIosArrowRoundForward className='primary-btn-icon'/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

     <section className="partners-section">
      <div className="container">
        <p className="tagline" style={{ textTransform: "uppercase" }}>Official Publication Partner</p>

        <h2 className="main-heading">
         Publication Notice
        </h2>

                 <div className="submission-card sp-card">
            <p> <b>Publication Notice:</b> Accepted and presented papers are expected to be published in a <b>Springer publication </b>, subject to peer review, editorial checks, and compliance with the publisher’s manuscript preparation requirements.</p>
          </div>
          <div className="sp-img-container">
            <img src={SP} alt="" />
          </div>
      </div>

      
    </section>

        <section className="submission-section sp-container uo-container">
      <div className="submission-header sp-header">
        <span className="section-label sp-label" style={{ textTransform: "uppercase" }}></span>
        <h2 className='oc' style={{ width: "100%" }}>Our Partners & Co-organisers</h2>
      </div>
      <div className="uo-img-container">
          <div className="uo-container">
            <img src={UO} alt="" />
          </div>
          <div className="uo-container">
            <img src={UTC} alt="" />
          </div>
          <div className="uo-container">
            <img src={ST} alt="" />
          </div>
          </div>
    </section>

    </main>
  )
}

export default Home