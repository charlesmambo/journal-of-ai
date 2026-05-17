import React, { useState } from "react";
import '../archive/Archive.css';
import { BiSearch } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";
const Archive = () => {
  const [topic, setTopic] = useState("All");
  const [year, setYear] = useState("All");

  const topics = ["All", "Education", "Governance", "Ethics", "Systems"];
  const years = ["All", "2026", "2025"];


  const articles = [
  {
    category: "EDUCATION",
    date: "December 2025",
    title:
      "Predictive Analytics in Educational Outcomes: A Machine Learning Approach",
    authors: "A. Bayega, T. Mthethwa, S. Daniel",
    description:
      "This study investigates the application of machine learning to forecast learner performance in multilingual African contexts, proposing a...",
    tags: ["machine learning", "education", "fairness"],
    volume: "Vol 1 · Issue 1",
  },
  {
    category: "GOVERNANCE",
    date: "December 2025",
    title:
      "AI Governance Frameworks for Southern Africa: A Policy Synthesis",
    authors: "N. Khumalo, P. Adeyemi",
    description:
      "We review emerging AI policy across SADC and propose a layered governance framework that balances innovation with rights-based protections.",
    tags: ["governance", "policy", "SADC"],
    volume: "Vol 1 · Issue 1",
  },
  {
    category: "ETHICS",
    date: "December 2025",
    title: "Ethics of Generative AI in the University Classroom",
    authors: "L. van der Merwe, J. Okafor",
    description:
      "An ethnographic study of generative AI use across three South African universities, surfacing tensions between productivity, equity, and...",
    tags: ["ethics", "generative AI", "higher education"],
    volume: "Vol 1 · Issue 1",
  },
  {
    category: "SYSTEMS",
    date: "June 2024",
    title:
      "Designing Human-Centered AI Systems for Public Services",
    authors: "R. Mokoena, C. Hendricks",
    description:
      "A design-research case study on participatory development of an AI-assisted public health triage tool deployed in primary care clinics.",
    tags: ["systems design", "human-centered AI", "health"],
    volume: "Vol 1 · Issue 2",
  },
  {
    category: "SYSTEMS",
    date: "December 2024",
    title:
      "Language Models for Low-Resource African Languages: Benchmarks & Bias",
    authors: "S. Naidoo, K. Bayega",
    description:
      "We release a benchmark suite for isiXhosa, isiZulu and Sesotho LLM evaluation and analyse systematic bias patterns across leading models.",
    tags: ["NLP", "African languages", "benchmark"],
    volume: "Vol 1 · Issue 1",
  },
  {
    category: "ETHICS",
    date: "December 2024",
    title:
      "Algorithmic Fairness in University Admissions: A South African Lens",
    authors: "T. Pillay",
    description:
      "We critique the deployment of algorithmic admissions tools and propose context-sensitive fairness criteria grounded in transformation...",
    tags: ["fairness", "admissions", "transformation"],
    volume: "Vol 1 · Issue 1",
  },
];
  return (
    <div>
       <section className="archive-hero">
      <div className="container">
        <span className="label">ARCHIVE</span>

        <h2 className="title">
          Browse the JAI-PTD <br/> archive.
        </h2>

        <p className="description">
          Explore peer-reviewed articles across all issues. Filter by topic,
          year or search by keyword.
        </p>
      </div>
    </section> 

    <section>
        <div className="filter-bar">
      {/* SEARCH */}
      <div className="filter-group search-group">
        <label>SEARCH</label>
        <div className="search-input">
          <span className="search-icon"><BiSearch /></span>
          <input
            type="text"
            placeholder="Title, author or keyword..."
          />
        </div>
      </div>

      {/* TOPIC */}
      <div className="filter-group">
        <label>TOPIC</label>
        <div className="chips">
          {topics.map((t) => (
            <button
              key={t}
              className={`chip ${topic === t ? "active" : ""}`}
              onClick={() => setTopic(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* YEAR */}
      <div className="filter-group">
        <label>YEAR</label>
        <div className="chips">
          {years.map((y) => (
            <button
              key={y}
              className={`chip ${year === y ? "active" : ""}`}
              onClick={() => setYear(y)}
            >
              {y}
            </button>
          ))}
        </div>
      </div>
    </div>
    </section>

    <section>
         <div className="article-page">
      <p className="article-count">
        Showing <strong>6</strong> of <strong>6</strong> articles
      </p>

      <div className="articles-grid">
        {articles.map((article, index) => (
          <div className="card" key={index}>
            <div className="card-top">
              <span className="category">{article.category}</span>
              <span className="date">{article.date}</span>
            </div>

            <h3 className="title">{article.title}</h3>

            <p className="authors">{article.authors}</p>

            <p className="description">{article.description}</p>

            <div className="tags">
              {article.tags.map((tag, i) => (
                <span className="tag" key={i}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="card-footer">
              <span className="volume">{article.volume}</span>

             <a href="/" className="read-more">
                         Read More <IoIosArrowRoundForward className='primary-btn-icon'/>
                       </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    </div>
  )
}

export default Archive