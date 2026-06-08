import React from 'react';
import '../about/About.css';
import { LuCompass } from "react-icons/lu";
import { SiCircle } from "react-icons/si";


const About = () => {
const cards = [
  {
    icon: <LuCompass />,
    title: "Vision",
    content: `To become a globally recognized academic publication that fosters pioneering research and innovation in AI and data science. By bridging the gap between theoretical advancements and practical applications, JAI-PTD contributes to the responsible and ethical development of AI-powered technologies  exploring how AI can improve education, governance, and sustainable development while addressing critical concerns around data privacy, fairness and inclusivity. The journal aspires to position the Faculties of Education at UWC and Stellenbosch University as leaders in AI-driven research and policy discussions.`,
  },
  {
    icon: <SiCircle />,
    title: "Mission",
    content: `Publish high quality, peer-reviewed research on AI and data science applications with meaningful impact on education, policy, and industry. JAI-PTD facilitates dialogue among scholars, practitioners and policymakers; offers a rigorous platform for new methodologies, ethical considerations, and evidence based strategies; and is committed to inclusivity actively seeking contributions from underrepresented regions, particularly across Africa, through open-access publication.`,
  },
];

const scopeItems = [
  {
    title: "AI in teaching and learning",
    description:
      "Design, implementation, and evaluation of AI-powered tools, platforms, and environments that support teaching, learning, and curriculum innovation across sectors.",
  },
  {
    title: "AI for assessment, analytics, and student success",
    description:
      "AI-enabled assessment, learning analytics, early-warning systems, and decision-support tools aimed at improving learner, student, and institutional outcomes.",
  },
  {
    title: "AI for governance, planning, and decision support",
    description:
      "Applications of AI and decision intelligence for strategic planning, educational management, public governance, policy analysis, and resource optimisation.",
  },
  {
    title: "Ethical, socially just, and inclusive AI",
    description:
      "Critical perspectives on ethics, equity, bias, regulation, and responsible AI use, particularly in relation to historically marginalised communities and Global South realities.",
  },
  {
    title: "Design, implementation, and evaluation of AI-powered systems",
    description:
      "Interdisciplinary approaches to the human-centred design, deployment, evaluation, and scaling of AI-enabled technologies in real world educational and developmental settings.",
  },
  {
    title: "AI in education",
    description:
      "Personalised and adaptive learning, intelligent tutoring systems, learning support tools, and data-driven approaches to curriculum design, educational policy, and student assessment aimed at improving teaching and learning outcomes.",
  },
  {
    title: "AI for governance and public policy",
    description:
      "Data-driven decision-making in the public sector, AI-enabled planning and service delivery, and the use of machine learning and analytics to inform policy formulation, implementation, and evaluation.",
  },
  {
    title: "AI, sustainability, and public health",
    description:
      "Applications of AI and data science for climate change mitigation and adaptation, environmental monitoring, resource management, and AI-driven public health interventions that support sustainable development.",
  },
  {
    title: "AI, law, ethics, and regulation",
    description:
      "Ethical and responsible AI use, algorithmic fairness, transparency and accountability, legal and regulatory frameworks for AI, and the role of AI in enhancing access to justice and protecting rights.",
  },
];

const timelineData = [
  { label: "Launch of journal website", value: "16 September 2026" },
  { label: "Call for Papers published", value: "20 November 2026" },
  { label: "Deadline for submission to inaugural issue", value: "22 January 2027" },
  { label: "Notification of review outcomes", value: "22 April 2027" },
  { label: "Revised paper submission deadline", value: "4 June 2027" },
  { label: "Expected online publication of inaugural issue", value: "4 September 2027" },
];
  return (
    <div className='abt'>
         <section className="abt-journal">
      <div className="abt-journal-container">
        
        <span className="abt-label">
          ABOUT THE JOURNAL
        </span>

        <h2 className="abt-title">
          A scholarly home for <br />
          responsible AI research.
        </h2>

        <p className="abt-text">
          JAI-PTD is a peer-reviewed, open-access journal jointly hosted by
          Stellenbosch University and the University of the Western Cape.
        </p>

      </div>
    </section>

 <section className="intro_section">
      <div className="intro_container">

        {/* LEFT CONTENT */}
        <div className="intro_left">
          <h2>Introduction</h2>

          <p>
            The rapid advancement of artificial intelligence (AI) and data
            science has transformed industries, reshaped economies, and
            redefined educational paradigms. AI-powered technologies are
            playing a crucial role in enhancing learning, research, and policy
            development across various disciplines. The proliferation of machine
            learning, natural language processing, and big data analytics has
            opened new opportunities for knowledge generation and
            decision-making. As AI becomes increasingly embedded in academic and
            professional landscapes, there is a growing need for scholarly
            discourse that critically examines its implications, innovations,
            and applications. The journal is anchored in an African higher
            education context, led by the Faculty of Education at Stellenbosch
            University in collaboration with the University of the Western Cape
            (South Africa) and aims to position the Global South as a key voice
            in AI-powered technology research.
          </p>

          <p>
            Recognizing this need, the Journal of AI-Powered Technology and
            Development (JAI-PTD) is being established at the Faculty of
            Education, Stellenbosch University and University of the Western
            Cape (UWC). This journal serves as a premier outlet for
            interdisciplinary research that explores the intersection of AI,
            data science, and their real-world applications. With a strong focus
            on education, governance, policy, and social impact, the journal
            provides a platform for scholars, educators, policymakers, and
            technology professionals to engage with cutting-edge developments in
            AI-driven technologies.
          </p>

<div className="vm-wrapper">
      <div className="cards-container vm-cards">
        {cards.map((card, index) => (
          <div className="card vm-cards" key={index}>
            <div className="icon-box">
              <span className="">{card.icon}</span>
            </div>
            <h3 className='vm-title'>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
</div>

<div className="aims-page">
      <div className="aims-page-content">
        <h2>Aims &amp; scope</h2>

        <p className="aims-intro-text">
          JAI-PTD is a peer-reviewed scholarly journal that provides a platform
          for research, theory, and practice on AI-powered technologies for
          education, governance, and development with a particular emphasis on
          African and broader Global South contexts. The journal welcomes
          high-quality empirical, conceptual, methodological, and
          practice-oriented contributions that engage with, but are not limited
          to, the following thematic areas:
        </p>

        <div className="scope-list">
          {scopeItems.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
<div className="aims-page">
      <div className="aims-page-content">
        <h2>Focus areas</h2>

        <p className="aims-intro-text">
JAI-PTD focuses on the intersection of artificial intelligence, data science, and their real-world applications in supporting human development — with a particular emphasis on education, governance, sustainability, and law. The journal welcomes theoretical, empirical and practice-based contributions in (but not limited to):
        </p>

        <div className="scope-list">
          {scopeItems.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
                <p className='last-p'>By maintaining a broad yet coherent scope, JAI-PTD aims to foster interdisciplinary research that bridges technological innovation and pressing development challenges.</p>
      </div>
    </div>

<div className="page-wrapper">
      <div className="content-container">
        {/* Target Audience Section */}
        <section className="section">
          <div className="section-header">
            <h2>Target audience</h2>
          </div>

          <p>
            The journal serves a diverse audience including academics,
            researchers, AI practitioners, data scientists, policymakers, legal
            experts, and educators. University faculty and postgraduate students
            working on AI-related research will find JAI-PTD a valuable resource
            for publishing their work and staying updated on the latest
            developments. Industry professionals involved in AI-driven
            innovation and data science applications will benefit from insights
            into the academic and theoretical foundations of emerging
            technologies.
          </p>

          <p>
            The journal also seeks to engage policymakers and government
            officials responsible for shaping regulations around AI and data
            governance. By facilitating discussions among scholars,
            policymakers and industry leaders, JAI-PTD contributes to
            evidence-based policymaking and responsible AI adoption across
            sectors.
          </p>
        </section>

        {/* Ownership Section */}
        <section className="section ownership-section">
          <h2>Ownership &amp; hosting institution</h2>

          <p>
            JAI-PTD is an academic journal hosted by the{" "}
            <strong>
              Faculty of Education, Stellenbosch University, South Africa.
            </strong>{" "}
            The Faculty provides institutional support for the journal's
            strategic direction, governance framework and quality assurance
            processes. Day-to-day editorial operations are managed by the
            Editor-in-Chief and Associate Editors, in collaboration with the
            Editorial Advisory Board.
          </p>

          <p>
            The journal may be co-hosted or supported by partner institutions,
            networks or research centres, acknowledged on the journal website
            and masthead as formal partnerships are concluded.
          </p>
        </section>

        <section className="section ownership-section">
          <h2>Data protection & privacy</h2>

          <p>
The journal and its hosting institution are committed to responsible handling of personal information. Personal data collected during submission and peer review (e.g. names, affiliations, contact details) is used solely for editorial and publication-related purposes, and processed in accordance with applicable data protection legislation and institutional policies (e.g. POPIA and relevant international frameworks where applicable). Authors, reviewers and editors may request clarification on data handling practices via the Editorial Office.
          </p>
        </section>

         <div className="timeline-container">
      <div className="timeline-header">
        <h2>Timeline & key dates</h2>
      </div>

      <p className="subtitle">
        Synced with the inaugural Call for Papers.
      </p>

      <div className="card">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-row">
            <span className="label">{item.label}</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>

      <p className="footnote">
        Dates marked TBC will be confirmed alongside the Call for Papers.
      </p>
    </div>
      </div>
    </div>



        </div>

        {/* RIGHT SIDEBAR */}
        <div className="intro_right">

          {/* BLUE CARD */}
          <div className="glance_card">
            <span className="glance_label">AT A GLANCE</span>

            <div className="glance_item">
              <p>Founded</p>
              <h4>2025</h4>
            </div>

            <div className="glance_item">
              <p>Frequency</p>
              <h4>Bi-annual</h4>
            </div>

            <div className="glance_item">
              <p>Access</p>
              <h4>Open · CC-BY</h4>
            </div>

            <div className="glance_item">
              <p>Review</p>
              <h4>Double-blind</h4>
            </div>

            <div className="glance_item no_border">
              <p>Languages</p>
              <h4>English</h4>
            </div>
          </div>

          {/* QUOTE CARD */}
          <div className="card">
            <p>
              "JAI-PTD aspires to be a hub for AI research,
              predicting it as a key player in the development
              of best-in-class AI scholarship from Africa."
            </p>

            <span className='qt-card-text'>EDITOR-IN-CHIEF</span>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About