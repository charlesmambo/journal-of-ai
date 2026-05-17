import React, { useState } from "react";
import '../guides/Guide.css';
import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Guide = () => {
    const [activeTab, setActiveTab] = useState("authors");

const policyData = [
  {
    title: "Research ethics and integrity",
    content:
      "Studies involving human participants, personal data, or sensitive contexts must indicate that appropriate ethical approval (e.g. institutional review board / ethics committee) was obtained and that informed consent procedures were followed. Authors must clearly describe risks, safeguards, and procedures for protecting privacy and confidentiality — particularly in AI- and data-intensive research. Plagiarism, self-plagiarism, data fabrication, and data falsification are strictly prohibited; manuscripts may be screened using plagiarism-detection tools. All authors must meet accepted criteria for authorship and take collective responsibility for the integrity of the work. JAI-PTD aligns its practices with international best practice in scholarly publishing ethics (e.g. COPE-aligned principles), adapted to Global South contexts.",
  },
  {
    title: "Use of AI and generative technologies",
    content: "Authors must declare in the manuscript (Methods or Acknowledgements) any use of AI tools — including generative language models, image generators, and automated coding tools — in: (i) data collection, processing or analysis; (ii) drafting or editing text; or (iii) generating figures, tables or code. AI tools cannot be listed as authors; responsibility for content remains solely with the human authors. Authors must check AI-generated content for accuracy, bias, and ethical implications, and ensure no infringement of copyright, privacy or other rights. Submissions involving AI systems that process human data should clearly address fairness, bias mitigation, explainability and accountability where relevant. Non-compliant manuscripts may be returned for clarification or rejected on ethical grounds.",
  },
  {
    title: "Data, code and materials availability",
    content: "Authors are encouraged to make data, code and relevant materials available in a trusted repository whenever ethically and legally permissible. Where full sharing is not possible (e.g. privacy, security, or contractual constraints), authors should clearly explain the limitations and describe how data access could be granted under controlled conditions. A brief Data and Code Availability Statement must be included indicating whether data/code are available, where they can be accessed, and under what conditions",
  },
  {
    title: "Conflicts of interest",
    content: "All authors, reviewers and editors must declare any actual or potential conflicts of interest, including financial relationships (funding, employment, consultancies, stock ownership) and non-financial interests (personal, professional or institutional relationships that may influence judgement). Where conflicts exist, appropriate safeguards will be implemented — such as reassignment of the handling editor or reviewers",
  },
  {
    title: "Appeals and complaints",
    content: "Authors who believe an editorial decision was made in error may appeal by writing to the Editor-in-Chief, setting out a clear, evidence-based rationale and addressing specific points in the reviewers' reports. The Editor-in-Chief may seek input from additional Associate Editors or independent senior advisors not involved in the original decision. Complaints relating to ethical concerns, reviewer conduct or editorial procedures should be submitted in writing to the Editorial Office and will be handled in line with the journal's commitment to fairness, transparency and due process. Serious or unresolved matters may be escalated to the Dean of the Faculty of Education, Stellenbosch University.",
  },
  {
    title: "Whistleblowing",
    content: "Whistleblowers raising concerns in good faith — about suspected research misconduct, plagiarism, data misuse, or breaches of editorial process — will be treated with strict confidentiality and without prejudice.",
  },
  {
    title: "Data protection and privacy",
    content: "Personal data collected during submission and peer review (names, affiliations, contact details) is used solely for editorial and publication-related purposes. Data is processed in accordance with applicable data protection legislation and institutional policies, including POPIA and relevant international frameworks. Authors, reviewers and editors may request clarification on data handling practices via the Editorial Office.",
  },
  {
    title: "Open access, licensing and dissemination",
    content: "JAI-PTD is fully open access: articles are published under a CC-BY 4.0 licence, with authors retaining copyright. The journal is published biannually and hosted on the Stellenbosch digital repository, with the goal of inclusion in major academic indexes. Dissemination is supported through social media, academic conferences, and partnerships with AI and data science research centres to ensure broad global reach.",
  },
  {
    title: "Partnership, indexing and long-term stewardship",
    content: "As the journal matures, the Editorial Team and hosting institution will pursue inclusion of JAI-PTD in recognised indexing and abstracting services, develop long-term digital preservation arrangements through institutional repositories or trusted archiving partners, and explore partnerships with scholarly societies, networks and international publishers — without compromising editorial independence.",
  },
];
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
    <section className="guides-section">
      <div className="guides-container">
        <p className="label">GUIDELINES</p>

        <h2 className="guides-title">
          Submission guidelines.
        </h2>

        <p className="guides-description">
          Comprehensive guidance for authors, editors and reviewers 
          built to keep our process rigorous and fair.
        </p>
      </div>
    </section>

    <section className="guides-wrapper">
      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={activeTab === "authors" ? "tab active" : "tab"}
          onClick={() => setActiveTab("authors")}
        >
          For Authors
        </button>

        <button
          className={activeTab === "editors" ? "tab active" : "tab"}
          onClick={() => setActiveTab("editors")}
        >
          For Editors
        </button>

        <button
          className={activeTab === "reviewers" ? "tab active" : "tab"}
          onClick={() => setActiveTab("reviewers")}
        >
          For Reviewers
        </button>
      </div>

      {/* AUTHORS */}
      {activeTab === "authors" && (
        <div className="content-wrapper">
          <div className="card">
            <h3>Manuscript preparation</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Anonymised Word document</li>
              <li><GoDotFill className="g-icon"/>Double-spaced, 11–12pt</li>
              <li><GoDotFill className="g-icon"/>Numbered tables/figures with captions</li>
              <li><GoDotFill className="g-icon"/>APA 7 references</li>
            </ul>
          </div>

          <div className="card">
            <h3>Article structure</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Title (clear, descriptive)</li>
              <li><GoDotFill className="g-icon"/>Abstract: 200–250 words</li>
              <li><GoDotFill className="g-icon"/>Keywords: 4–6 terms</li>
              <li><GoDotFill className="g-icon"/>IMRaD or thematic structure</li>
              <li><GoDotFill className="g-icon"/>Conclusion & implications</li>
            </ul>
          </div>
          <div className="card">
            <h3>Length</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Research articles: 4,000–8,000 words</li>
              <li><GoDotFill className="g-icon"/>Reviews: up to 10,000 words</li>
              <li><GoDotFill className="g-icon"/>Short communications: 2,000–3,500 words</li>
            </ul>
          </div>
        </div>
      )}

      {/* EDITORS */}
      {activeTab === "editors" && (
        <div className="content-wrapper">
          <div className="card">
            <h3>Editorial responsibility</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Make fair, unbiased decisions</li>
              <li><GoDotFill className="g-icon"/>Maintain confidentiality</li>
              <li><GoDotFill className="g-icon"/>Disclose conflicts of interest</li>
              <li><GoDotFill className="g-icon"/>Uphold ethical standards</li>
            </ul>
          </div>
          <div className="card">
            <h3>Initial assessment</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Review within 5 business days</li>
              <li><GoDotFill className="g-icon"/>Assess scope and fit</li>
              <li><GoDotFill className="g-icon"/>Evaluate methodological rigor</li>
              <li><GoDotFill className="g-icon"/>Check originality (plagiarism screening)</li>
            </ul>
          </div>
          <div className="card">
            <h3>Decision guidelines</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Base decisions on reviewer recommendations and editorial judgment</li>
              <li><GoDotFill className="g-icon"/>Provide clear, constructive feedback</li>
              <li><GoDotFill className="g-icon"/>Specify timelines and expectations</li>
            </ul>
          </div>
        </div>
      )}

      {/* REVIEWERS */}
      {activeTab === "reviewers" && (
        <div className="content-wrapper">
          <div className="card">
            <h3>Reviewer selection</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Two reviewers per manuscript</li>
              <li><GoDotFill className="g-icon"/>Geographic and disciplinary diversity</li>
              <li><GoDotFill className="g-icon"/>No conflicts of interest</li>
              <li><GoDotFill className="g-icon"/>Track expertise and timeliness</li>
            </ul>
          </div>
          <div className="card">
            <h3>Reviewing the abstract</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>200–250 words summarising the research</li>
              <li><GoDotFill className="g-icon"/>Self-contained, no abbreviations</li>
              <li><GoDotFill className="g-icon"/>Includes 4–6 keywords</li>
            </ul>
          </div>
          <div className="card">
            <h3>Editorial decisions</h3>

            <ul className="guides-list">
              <li><GoDotFill className="g-icon"/>Accept background, rationale, methods clear</li>
              <li><GoDotFill className="g-icon"/>Minor revisions, small changes needed</li>
              <li><GoDotFill className="g-icon"/>Major revisions, significant rework</li>
              <li><GoDotFill className="g-icon"/>Reject does not meet publication standard</li>
            </ul>
          </div>
        </div>
      )}
    </section>

    <div className="policies-page">
      <div className="policies-container">
        <p className="label">POLICIES</p>

        <h2 className="policies-heading">Ethics, data & AI use</h2>

        <div className="guides-accordion">
          {policyData.map((item, index) => (
            <div className="guides-accordion-item" key={index}>
              <button
                className="guides-accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <span className="guides-accordion-header-title">{item.title}</span>
                <span className="accordion-icon">
                  {openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {openIndex === index && item.content && (
                <div className="guides-accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Guide