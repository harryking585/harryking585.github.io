import { HashRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-neutral-100 px-6 py-12">
        <section className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg"
          >
            Harrison King
          </motion.h1>

          <p className="text-lg text-neutral-400 max-w-2xl mb-10 italic leading-relaxed">
            Software Engineer with a strong foundation in Python, C, and full‑stack development.
            Passionate about building reliable systems, clean interfaces, and scalable solutions.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-16">
            <IconLink href="https://github.com/yourusername" label="GitHub">
              <Github className="w-8 h-8 hover:text-blue-400 transition-transform transform hover:scale-110" />
            </IconLink>
            <IconLink href="https://linkedin.com/in/yourusername" label="LinkedIn">
              <Linkedin className="w-8 h-8 hover:text-blue-600 transition-transform transform hover:scale-110" />
            </IconLink>
            <IconLink href="mailto:youremail@email.com" label="Email">
              <Mail className="w-8 h-8 hover:text-green-400 transition-transform transform hover:scale-110" />
            </IconLink>
          </div>

          {/* Projects */}
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

          {/* Skills */}
          <Section title="Skills">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Python", "C / C++", "JavaScript", "React", "Linux", "Git & GitHub"].map(skill => (
                <li
                  key={skill}
                  className="bg-neutral-800 py-2 px-4 rounded-full text-sm text-neutral-200 text-center hover:bg-blue-500 transition"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Section>

          {/* Footer */}
          <footer className="mt-20 text-sm text-neutral-500 border-t border-neutral-800 pt-4 text-center">
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
    <div className="mb-6 rounded-2xl border border-neutral-800 p-6 bg-neutral-900 hover:border-neutral-600 hover:shadow-lg hover:-translate-y-1 transition transform">
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