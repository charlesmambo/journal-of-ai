import React, { useState } from "react";
import '../submission/Subs.css';
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { BsSend } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
const Subs = () => {
const steps = [
  {
    number: "01",
    title: "Read the overview",
    description: "Confirm scope, audience and article types.",
    icon:<TiDocumentText />,
  },
  {
    number: "02",
    title: "Check requirements",
    description: "Format, length, ethics & data policies.",
    icon: <HiOutlineClipboardDocumentCheck />,
  },
  {
    number: "03",
    title: "Prepare files",
    description: "Anonymised manuscript + cover letter + figures.",
    icon: <HiOutlineDocumentCheck/>,
  },
  {
    number: "04",
    title: "Submit",
    description: "Complete the secure submission form.",
    icon: <BsSend />,
  },
];

const [openIndex, setOpenIndex] = useState(0);
 const accordionData = [
    {
      title: "Manuscript preparation",
      content: (
        <ul>
          <li>Word document, double-spaced, 11–12pt body text</li>
          <li>Anonymised — no author identifiers in the file</li>
          <li>Numbered tables & figures with captions</li>
          <li>APA 7 referencing, complete bibliography</li>
        </ul>
      ),
    },
    {
      title: "Submission checklist",
      content: (
        <ul>
          <li>Manuscript not under review elsewhere</li>
          <li>All co-authors approved the submission</li>
          <li>Conflicts of interest declared</li>
          <li>Ethical clearance (where applicable)</li>
          <li>Cover letter included</li>
        </ul>
      ),
    },
    {
      title: "Ethical & data policies",
      content: (
        <ul>
          <li>Compliance with POPIA / institutional ethics</li>
          <li>Informed consent for human-subject research</li>
          <li>Data availability statement required</li>
          <li>Disclosure of generative AI use in writing</li>
        </ul>
      ),
    },
  ];

  

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps2 = [
    {
      number: 1,
      title: "Acknowledgement (within 3 days)",
      description:
        "Editorial team confirms receipt and assigns an editor.",
    },
    {
      number: 2,
      title: "Initial screening (1–2 weeks)",
      description:
        "Scope, structure and quality assessment.",
    },
    {
      number: 3,
      title: "Peer review (4–6 weeks)",
      description:
        "Two anonymous reviewers; transparent feedback.",
    },
    {
      number: 4,
      title: "Decision",
      description:
        "Accept · minor revisions · major revisions · reject.",
    },
    {
      number: 5,
      title: "Revisions",
      description:
        "Authors submit a revised manuscript together with a detailed response letter explaining how each reviewer and editorial comment has been addressed. Revisions may be returned to the original reviewers, or assessed by the handling editor where changes are straightforward.",
    },
    {
      number: 6,
      title: "Final acceptance & production",
      description:
        "Accepted manuscripts proceed to copy-editing, typesetting and proofing. Authors check proofs for typographical and minor factual errors prior to final publication. JAI-PTD aims to provide an initial decision within 6–8 weeks of submission, depending on reviewer availability and the nature of the manuscript.",
    },
  ];

  const navigate = useNavigate();
  return (
    <div>
         <section className="submission-section">
      <div className="submission-container">
        <p className="label">SUBMISSIONS</p>

        <h2 className="submission-title">
          Submit your research to JAI-PTD.
        </h2>

        <p className="submission-description">
          A guided, four-step process from preparing your manuscript to
          receiving an editorial decision within 6–8 weeks.
        </p>
      </div>
    </section>

     <section className="steps-section">
      <div className="steps-grid">
        {steps.map((step, index) => (
          <div className="card" key={index}>
            <div className="step-header">
              <div className="icon-box">{step.icon}</div>

              <span className="step-number">{step.number}</span>
            </div>

            <h3 className="step-title">{step.title}</h3>

            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="sub-wrapper">
      <div className="submission-left">
        <span className="step-label">STEP 1 — OVERVIEW</span>

        <div className="sub-heading-line-wrapper">
          <h2>Submission overview</h2>
          <div className="sub-heading-line"></div>
        </div>

        <p className="s-intro-text">
          JAI-PTD welcomes original research articles, systematic reviews,
          policy analyses, case studies and short communications on AI in
          education, governance, ethics and systems design. The journal follows
          a rigorous, transparent, and ethically grounded editorial process to
          ensure the quality, integrity and relevance of all published work.
        </p>

        <div className="content-block">
          <h2>Peer-review model</h2>

          <p>
            JAI-PTD operates a{" "}
            <strong>double-blind peer-review process:</strong> the identities of
            authors and reviewers are concealed from each other throughout the
            review process. At least two independent reviewers are typically
            invited for each manuscript, with additional reviewers consulted
            where necessary. Reviewers are selected on the basis of their
            subject expertise, methodological competence, and absence of
            conflicts of interest.
          </p>
        </div>

        <div className="content-block">
          <h2>Editorial workflow</h2>

          <ol>
            <li>
              <strong>1. Submission and initial screening</strong> — Manuscripts
              are submitted through the journal's online submission system. The
              Editor-in-Chief or a designated Associate Editor conducts an
              initial assessment to determine fit with the aims and scope of
              JAI-PTD; basic scholarly quality, originality and clarity; and
              compliance with formatting, ethical and authorship guidelines.
              Manuscripts that do not meet these baseline criteria may be
              desk-rejected without external review.
            </li>
            <li>
              <strong>2. Assignment to handling editor </strong> — Suitable manuscripts are assigned to a handling editor (Associate Editor) who oversees the review process and identifies qualified reviewers, taking into account disciplinary, geographical and methodological diversity.
            </li>
            <li>
              <strong>3. Peer review </strong> — Invited reviewers provide a structured report addressing originality, theoretical and/or practical contribution, methodological soundness, ethical compliance, clarity of presentation, and relevance for JAI-PTD's audience. Reviewers may recommend acceptance, minor revision, major revision, or rejection.
            </li>
            <li>
              <strong>3. Editorial decision  </strong> — The handling editor considers reviewers' reports and makes a reasoned recommendation to the Editor-in-Chief, who issues one of: Accept · Minor revision · Major revision · Reject. Decisions are communicated to authors with anonymised reviewer reports and, where appropriate, additional editorial guidance.
            </li>
          </ol>
        </div>
<section className="requirements-section">
      <span className="label">
        STEP 2 — REQUIREMENTS
      </span>

      <h2>Requirements & checklist</h2>

      <div className="accordion-container">
        {accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <span>{item.title}</span>

              {openIndex === index ? (
                <FiChevronUp />
              ) : (
                <FiChevronDown />
              )}
            </button>

            <div
              className={`accordion-content ${
                openIndex === index ? "active" : ""
              }`}
            >
              <div className="accordion-inner">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

 <section className="process-section">
      <span className="label">
        STEP 3 — PROCESS
      </span>

      <h2>What happens next</h2>

      <div className="timeline">
        {steps2.map((step) => (
          <div className="timeline-item" key={step.number}>
            <div className="timeline-number">
              {step.number}
            </div>

            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
      </div>

      <div className="submission-right">
        <div className="sidebar-card">
          <span className="card-step">STEP 4</span>

          <h3>Submit your manuscript</h3>

          <p>
            Submissions are managed through our secure online form. You'll
            receive a tracking ID by email immediately.
          </p>

          <div className="sub-actions">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0P0O4X9ykPt1DfrVAwyePaST4dhhTUwkqAwrTBBHxwsVTpQ/viewform?usp=publish-editor" className="primary-btn">
            Open submission form
            <IoIosArrowRoundForward className='primary-btn-icon'/>
          </a>

          <button className="secondary-btn" onClick={() => navigate("/guidelines")}>
            Read full guidelines
          </button>
          </div>

          <div className="divider"></div>

          <div className="sub-stats">
            <div className="sub-stat-row">
              <span>Article processing fee</span>
              <strong>None</strong>
            </div>

            <div className="sub-stat-row">
              <span>Average decision time</span>
              <strong>6-8 weeks</strong>
            </div>

            <div className="sub-stat-row">
              <span>Acceptance rate</span>
              <strong>~28%</strong>
            </div>
          </div>
        </div>

        <div className="contact-link">
          <NavLink to="/contact" className="contact-link">
          <span>Questions? Contact the editorial team</span>
          <IoIosArrowRoundForward className='primary-btn-icon'/>
          </NavLink>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Subs