import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Code2,
  Database,
  Github,
  GraduationCap,
  ServerCog,
  Sparkles,
  Workflow,
} from "lucide-react";
import "./styles.css";

const experience = [
  {
    company: "Williamson County",
    role: "Security / Audio-Visual System Specialist",
    period: "Jan 2025 — Present",
    summary:
      "Supporting county-wide camera and AV infrastructure while building automation and internal tooling that reduce repetitive operational work.",
    highlights: [
      "Developed PowerShell UI automation for election-cycle camera recording workflows.",
      "Redesigned an internal ticketing dashboard and supporting queries to improve operational visibility.",
      "Maintain and troubleshoot a surveillance environment spanning more than 1,000 endpoints.",
    ],
    tags: ["PowerShell", "Automation", "Systems", "Operations"],
  },
  {
    company: "City of Round Rock",
    role: "Information Technology Intern",
    period: "May 2024 — Aug 2024",
    summary:
      "Built application and reporting features across a municipal IT environment, working from backend APIs through frontend delivery and analytics.",
    highlights: [
      "Developed REST endpoints in Python/FastAPI for a React application and containerized the stack with Docker.",
      "Built Power BI reporting workflows backed by SharePoint and internal API data.",
      "Improved a MySQL schema for maintainability and supported service workflows in Zendesk.",
    ],
    tags: ["Python", "FastAPI", "React", "Power BI", "MySQL"],
  },
  {
    company: "NemaLife Inc.",
    role: "Data Analyst",
    period: "May 2023 — May 2024",
    summary:
      "Created data tools and automations for a biotechnology startup, combining API integration, forecasting, browser automation, and reporting.",
    highlights: [
      "Built a Pandas-based throughput forecasting tool using 10,000+ rows of operational data.",
      "Integrated Workday REST API data into analytics workflows.",
      "Automated receipt processing with Selenium, regex-based parsing, and lightweight LLM assistance.",
    ],
    tags: ["Python", "Pandas", "REST APIs", "Selenium", "Data Analysis"],
  },
];

const skillGroups = [
  {
    title: "Application Development",
    icon: Code2,
    skills: ["Python", "JavaScript", "React", "FastAPI", "REST APIs", "HTML/CSS"],
  },
  {
    title: "Data & Automation",
    icon: Workflow,
    skills: ["SQL", "Pandas", "Power BI", "Selenium", "PowerShell", "LLM-assisted workflows"],
  },
  {
    title: "Systems & Tooling",
    icon: ServerCog,
    skills: ["Git/GitHub", "Docker", "Linux", "Windows", "C/C++", "Bash"],
  },
];

function App() {
  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Harrison King home">
          HK<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
        </div>
        <a
          className="icon-button"
          href="https://github.com/harryking585"
          target="_blank"
          rel="noreferrer"
          aria-label="Harrison King's GitHub"
        >
          <Github size={20} />
        </a>
      </nav>

      <section id="top" className="hero shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="hero-copy"
        >
          <div className="eyebrow">
            <Sparkles size={16} />
            Software · Data · Automation
          </div>
          <h1>
            Harrison King
            <span> builds practical software for real-world systems.</span>
          </h1>
          <p className="hero-lede">
            Computer Science graduate and technology professional focused on API-driven applications,
            automation, data tooling, and dependable systems. I enjoy turning messy operational problems
            into software that is easier to use, understand, and maintain.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              View selected work <ArrowUpRight size={17} />
            </a>
            <a
              className="button button-secondary"
              href="https://github.com/harryking585"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} /> GitHub
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="hero-card"
        >
          <div className="hero-card-label">Current focus</div>
          <div className="focus-item">
            <Code2 size={18} />
            <div>
              <strong>Application engineering</strong>
              <span>Python, FastAPI, JavaScript, React</span>
            </div>
          </div>
          <div className="focus-item">
            <Database size={18} />
            <div>
              <strong>Data systems</strong>
              <span>APIs, SQL, analytics, transformation</span>
            </div>
          </div>
          <div className="focus-item">
            <Workflow size={18} />
            <div>
              <strong>Automation</strong>
              <span>Operational tooling and AI-assisted workflows</span>
            </div>
          </div>
        </motion.aside>
      </section>

      <section id="experience" className="section shell">
        <SectionHeading
          kicker="Professional experience"
          title="Technical work in production environments"
          body="My strongest engineering experience comes from solving operational, application, and data problems in real organizations."
        />

        <div className="experience-list">
          {experience.map((job, index) => (
            <motion.article
              key={`${job.company}-${job.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="experience-card"
            >
              <div className="experience-meta">
                <div className="experience-icon">
                  <Briefcase size={18} />
                </div>
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>
                <span className="period">{job.period}</span>
              </div>
              <p className="experience-summary">{job.summary}</p>
              <ul>
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="tag-row">
                {job.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section shell">
        <SectionHeading
          kicker="Selected project"
          title="Software you can inspect"
          body="Professional work is often private, so I keep a public project that demonstrates how I structure APIs, transform data, and build a frontend around a clean application contract."
        />

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="project-feature"
        >
          <div className="project-copy">
            <div className="project-label">Featured · Full-stack analytics</div>
            <h3>WC_DA</h3>
            <p>
              A World of Warcraft Mythic+ performance analyzer that retrieves Blizzard API data through a FastAPI backend,
              reshapes deeply nested responses into an application-specific model, calculates summary metrics, and presents
              run details in a lightweight JavaScript frontend.
            </p>
            <div className="project-points">
              <span>OAuth + third-party API integration</span>
              <span>Backend-owned data transformation</span>
              <span>Derived performance metrics</span>
              <span>Expandable run and party details</span>
            </div>
            <div className="tag-row project-tags">
              {['Python', 'FastAPI', 'JavaScript', 'REST API', 'Data Analysis'].map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
            <a
              className="text-link"
              href="https://github.com/harryking585/WC_DA"
              target="_blank"
              rel="noreferrer"
            >
              View repository <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-visual" aria-hidden="true">
            <div className="terminal-bar"><span /><span /><span /></div>
            <div className="code-line"><b>GET</b> /bestruns/dalaran/drchocolate</div>
            <div className="metric-grid">
              <div><span>Highest key</span><strong>14</strong></div>
              <div><span>Timed runs</span><strong>7</strong></div>
              <div><span>Avg. key</span><strong>11.6</strong></div>
              <div><span>Rating</span><strong>2709</strong></div>
            </div>
            <div className="mini-table">
              <span>Dungeon</span><span>Level</span><span>Status</span>
              <strong>Eco-Dome Al'dani</strong><strong>14</strong><em>Timed</em>
              <strong>Halls of Atonement</strong><strong>13</strong><em>Timed</em>
              <strong>Tazavesh</strong><strong>12</strong><i>Over</i>
            </div>
          </div>
        </motion.article>
      </section>

      <section id="skills" className="section shell">
        <SectionHeading
          kicker="Toolbox"
          title="Breadth backed by practical use"
          body="I work across the application stack, but I am most effective where software, APIs, data, and automation overlap."
        />
        <div className="skills-grid">
          {skillGroups.map(({ title, icon: Icon, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-heading"><Icon size={19} /><h3>{title}</h3></div>
              <div className="skill-list">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="education shell">
        <div className="education-icon"><GraduationCap size={20} /></div>
        <div>
          <span>Education</span>
          <strong>B.S. Computer Science · Mathematics Minor</strong>
          <p>Texas Tech University · 2024</p>
        </div>
      </section>

      <footer className="footer shell">
        <div>
          <strong>Harrison King</strong>
          <span>Software · Data · Automation</span>
        </div>
        <p>© {new Date().getFullYear()} Harrison King</p>
      </footer>
    </main>
  );
}

function SectionHeading({ kicker, title, body }) {
  return (
    <div className="section-heading">
      <span>{kicker}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default App;
