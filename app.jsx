// This portfolio is designed to work cleanly on GitHub Pages
// Key choices:
// 1. Uses HashRouter (no server-side routing issues on github.io)
// 2. Assumes Vite or CRA build output
// 3. No absolute asset paths

import { HashRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-12">
        <section className="max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Harrison King
          </motion.h1>

          <p className="text-lg text-neutral-400 max-w-2xl mb-8">
            Software Engineer with a strong foundation in Python, C, and full‑stack
            development. Passionate about building reliable systems, clean interfaces,
            and scalable solutions.
          </p>

          <div className="flex gap-4 mb-16">
            <IconLink href="https://github.com/yourusername" label="GitHub">
              <Github />
            </IconLink>
            <IconLink href="https://linkedin.com/in/yourusername" label="LinkedIn">
              <Linkedin />
            </IconLink>
            <IconLink href="mailto:youremail@email.com" label="Email">
              <Mail />
            </IconLink>
          </div>

          <Section title="Projects">
            <Project
              title="Scheduling Algorithms Simulator"
              description="Implemented FCFS, RR, SPN, SRT, and HRRN in C with detailed scheduling output."
              tech="C, Operating Systems"
            />
            <Project
              title="Data Analysis Toolkit"
              description="Python-based data processing and visualization tools using Pandas."
              tech="Python, Pandas"
            />
          </Section>

          <Section title="Skills">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-neutral-300">
              <li>Python</li>
              <li>C / C++</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Linux</li>
              <li>Git & GitHub</li>
            </ul>
          </Section>

          <footer className="mt-20 text-sm text-neutral-500">
            © {new Date().getFullYear()} Harrison King
          </footer>
        </section>
      </main>
    </Router>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Project({ title, description, tech }) {
  return (
    <div className="mb-6 rounded-2xl border border-neutral-800 p-6 hover:border-neutral-600 transition">
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-neutral-400 mb-2">{description}</p>
      <p className="text-sm text-neutral-500">{tech}</p>
    </div>
  );
}

function IconLink({ href, label, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl border border-neutral-800 hover:border-neutral-600 transition"
    >
      {children}
    </a>
  );
}
