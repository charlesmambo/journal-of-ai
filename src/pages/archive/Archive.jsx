import React, { useState } from "react";
import "../archive/Archive.css";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";

const Archive = () => {
  const [topic, setTopic] = useState("All");
  const [year, setYear] = useState("All");
  const [search, setSearch] = useState("");

  const topics = ["All", "Education", "Governance", "Ethics", "Systems"];
  const years = ["All", "2025", "2024"];

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
      title: "Designing Human-Centered AI Systems for Public Services",
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

  // Filter Articles
  const filteredArticles = articles.filter((article) => {
    const matchesTopic =
      topic === "All" ||
      article.category.toLowerCase() === topic.toLowerCase();

    const articleYear = article.date.split(" ")[1];
    const matchesYear =
      year === "All" || articleYear === year;

    const keyword = search.toLowerCase();

    const matchesSearch =
      article.title.toLowerCase().includes(keyword) ||
      article.authors.toLowerCase().includes(keyword) ||
      article.description.toLowerCase().includes(keyword) ||
      article.category.toLowerCase().includes(keyword) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(keyword)
      );

    return matchesTopic && matchesYear && matchesSearch;
  });

  return (
    <div>
      {/* HERO */}
      <section className="archive-hero">
        <div className="container">
          <span className="label">ARCHIVE</span>

          <h2 className="title">
            Browse the JAI-PTD <br /> archive.
          </h2>

          <p className="description">
            Explore peer-reviewed articles across all issues.
            Filter by topic, year or search by keyword.
          </p>
        </div>
      </section>

      {/* FILTERS */}
      <section>
        <div className="filter-bar">
          {/* SEARCH */}
          <div className="filter-group search-group">
            <label>SEARCH</label>

            <div className="search-input">
              <span className="search-icon">
                <BiSearch />
              </span>

              <input
                type="text"
                placeholder="Title, author or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
                  className={`chip ${
                    topic === t ? "active" : ""
                  }`}
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
                  className={`chip ${
                    year === y ? "active" : ""
                  }`}
                  onClick={() => setYear(y)}
                >
                  {y}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section>
        <div className="article-page">
          <p className="article-count">
            Showing <strong>{filteredArticles.length}</strong> of{" "}
            <strong>{articles.length}</strong> articles
          </p>

          <div className="articles-grid">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article, index) => (
                <div className="card" key={index}>
                  <div className="card-top">
                    <span className="art-category">
                      {article.category}
                    </span>

                    <span className="date">
                      {article.date}
                    </span>
                  </div>

                  <h3>{article.title}</h3>

                  <p className="authors">
                    {article.authors}
                  </p>

                  <p className="description">
                    {article.description}
                  </p>

                  <div className="art-tags">
                    {article.tags.map((tag, i) => (
                      <span className="tag" key={i}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <span className="volume">
                      {article.volume}
                    </span>

                    <a  className="read-more">
                      Read More{" "}
                      <IoIosArrowRoundForward className="primary-btn-icon" />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <h3>No articles found.</h3>
                <p>
                  Try changing the topic, year, or search
                  keyword.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Archive;