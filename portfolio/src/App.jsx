// Polished GitHub Pages–friendly React portfolio
// - HashRouter for GH Pages
// - Clean sections, subtle motion, responsive layout
// - No experimental APIs

import { HashRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function App() {
  return (
    <Router>
      <main style={styles.page}>
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </Router>
  );
}

function Header() {
  return (
    <header style={styles.header}>
      <span style={styles.logo}>HK</span>
      <nav style={styles.nav}>
        <a href="#/" style={styles.navLink}>Home</a>
        <a href="#/projects" style={styles.navLink}>Projects</a>
        <a href="#/skills" style={styles.navLink}>Skills</a>
        <a href="#/contact" style={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section style={styles.section} id="home">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.h1}
      >
        Harrison King
      </motion.h1>
      <p style={styles.subtitle}>
        Software engineer with hands-on experience building full-stack internal tools,
        data-driven systems, and automation pipelines. I’ve worked across APIs,
        databases, analytics, and infrastructure to turn messy real-world data into
        reliable, maintainable software.
      </p>
      <div style={styles.iconRow}>
        <IconLink href="https://github.com/yourusername"><Github /></IconLink>
        <IconLink href="https://linkedin.com/in/yourusername"><Linkedin /></IconLink>
        <IconLink href="mailto:youremail@email.com"><Mail /></IconLink>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section style={styles.section} id="projects">
      <h2 style={styles.h2}>Projects</h2>

      <div style={styles.grid}>
        <ProjectCard
          title="Internal Full-Stack Operations Platform"
          desc="Contributed to an in-house, Dockerized web application used by a municipal IT department. Built FastAPI endpoints consumed by a React front end, redesigned database schemas for scalability, and supported production issues across Windows, networking, and backend services."
          tech="Python · FastAPI · React · Docker · MySQL"
        />

        <ProjectCard
          title="Automated Analytics & Reporting System"
          desc="Designed a data pipeline that parsed internal API data and autonomously generated PowerBI dashboards published through SharePoint, ensuring up-to-date operational reporting without manual intervention."
          tech="Python · APIs · PowerBI · SharePoint"
        />

        <ProjectCard
          title="Predictive Throughput & Cost Analysis Tools"
          desc="Built Python-based analytics tools that processed large datasets (10k+ records) to forecast team throughput months in advance and automate cost tracking through web scraping, parsing, and model-assisted extraction."
          tech="Python · Pandas · Selenium · Data Analysis"
        />

        <ProjectCard
          title="High-Performance Bioinformatics Algorithms"
          desc="Implemented and optimized DNA/RNA comparison algorithms such as Needleman–Wunsch to process large biological matrices, configured to run on a high-performance computing environment."
          tech="C · Algorithms · High-Performance Computing"
        />

        <ProjectCard
          title="AI Healthcare Assistant"
          desc="Worked on a healthcare-focused AI assistant using retrieval-augmented generation to provide fitness and dietary guidance. Integrated RESTful back-end services with a PHP-based front end."
          tech="Python · RAG · REST APIs · PHP"
        />
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section style={styles.section} id="skills">
      <h2 style={styles.h2}>What I Work With</h2>
      <ul style={styles.skillGrid}>
        {[
          'Python', 'C / C++', 'C#', 'JavaScript', 'PHP',
          'React', 'FastAPI', 'REST APIs',
          'MySQL', 'Docker', 'Linux',
          'Pandas', 'Data Analysis', 'Git & GitHub'
        ].map(s => (
          <li key={s} style={styles.skill}>{s}</li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section style={styles.section} id="contact">
      <h2 style={styles.h2}>Contact</h2>
      <p style={styles.body}>I’m open to software engineering and IT-focused roles.</p>
      <a
        href="mailto:youremail@email.com"
        style={styles.cta}
      >
        Get in touch <ExternalLink size={16} />
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} Harrison King
    </footer>
  );
}

function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      style={styles.card}
    >
      <h3 style={styles.h3}>{title}</h3>
      <p style={styles.body}>{desc}</p>
      <span style={styles.meta}>{tech}</span>
    </motion.div>
  );
}

function IconLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" style={styles.iconBtn}>
      {children}
    </a>
  );
}

const styles = {
  page: {
    background: '#0a0a0a',
    color: '#eaeaea',
    minHeight: '100svh',
    width: '100vw',
    margin: 0,
    padding: 0,
    fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    position: 'sticky',
    top: 0,
    width: '100%',
    background: '#0a0a0a',
    borderBottom: '1px solid #222',
    zIndex: 10,
    boxSizing: 'border-box'
  },
  logo: { fontWeight: 700 },
  nav: { display: 'flex', gap: 16 },
  navLink: { color: '#aaa', textDecoration: 'none' },
  section: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '96px 24px',
    width: '100%',
    boxSizing: 'border-box'
  },
  h1: { fontSize: 48, marginBottom: 12 },
  h2: { fontSize: 28, marginBottom: 24 },
  h3: { fontSize: 18, marginBottom: 8 },
  subtitle: { color: '#aaa', maxWidth: 520 },
  body: { color: '#bbb' },
  meta: { color: '#777', fontSize: 14 },
  iconRow: { display: 'flex', gap: 12, marginTop: 20 },
  iconBtn: {
    border: '1px solid #222',
    borderRadius: 10,
    padding: 10,
    color: '#eaeaea'
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 },
  card: { border: '1px solid #222', borderRadius: 14, padding: 16 },
  skillGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 },
  skill: { border: '1px solid #222', borderRadius: 999, padding: '8px 14px', textAlign: 'center' },
  cta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    marginTop: 16,
    color: '#0a0a0a',
    background: '#eaeaea',
    padding: '10px 14px',
    borderRadius: 10,
    textDecoration: 'none'
  },
  footer: {
    textAlign: 'center',
    padding: '32px 24px',
    color: '#666',
    marginTop: 'auto',
    width: '100%',
    boxSizing: 'border-box'
  }
};
