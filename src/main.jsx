import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Download,
  ExternalLink,
  Sparkles,
  Terminal,
  MapPin,
  Phone,
  ChevronDown
} from "lucide-react";
import "./styles.css";


const projects = [
{
  number: "01",

  title: "AI Face Attendance System",

  description:
    "Smart attendance platform using face recognition with anti-spoof detection, camera streaming, recognition services and automated attendance records.",

  tags: ["Python", "Flask", "OpenCV", "InsightFace", "MySQL"],

  icon: "AI",

  github: "https://github.com/JishnuS-ux/AI-Attendance-System"
},
  {
    number: "02",
    title: "Smart Timetable Generator",
    description:
      "Constraint-based timetable generation for CSE sections with teacher clash prevention, balanced loads, lab rules, editable timings and PDF export.",
    tags: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    icon: "ST"
  },
  {
    number: "03",
    title: "Orchestral Flow",
    description:
      "A workflow-focused web project designed around structured collaboration, clean interfaces and practical software development.",
    tags: ["Web", "UI/UX", "JavaScript"],
    icon: "OF"
  },
  {
    number: "04",
    title: "AI Voice Controller",
    description:
      "VoxAssist — an Android voice assistant combining natural-language commands, speech recognition, text-to-speech and intelligent app automation.",
    tags: ["Kotlin", "Android", "AI", "Accessibility"],
    icon: "VA"
  },
{
  number: "05",
  title: "DataForge AI",
  description:
    "AI-powered software testing platform designed to generate structured test scenarios and support faster, more efficient testing workflows.",
  tags: ["React", "TypeScript", "AI", "Testing", "React Flow"],
  icon: "DF",
  live: "https://mockforge-ai-client.vercel.app/"
}
];

const skills = [
  { name: "Cloud Engineering", icon: Cloud },
  { name: "Software Development", icon: Code2 },
  { name: "Data Analytics", icon: Database },
  { name: "AI / ML", icon: Sparkles },
  { name: "DevOps", icon: Terminal }
];

const experiences = [
  {
  date: "Sep 2026",
  role: "Data Analytics Intern",
  company: "Oasis Infobyte",
  text:
    "Selected for a one-month Data Analytics internship focused on learning new skills, strengthening conceptual understanding, and applying knowledge through hands-on work.",
},
  {
    role: "Cloud Computing Intern",
    company: "CodeAlpha",
    date: "January 2026",
    text: "Gaining hands-on exposure to cloud computing concepts and technologies."
  },
  {
    role: "Full Stack Development Intern",
    company: "Ascentz Technologies",
    date: "May 2026",
    text: "Virtual front-end and back-end web development experience."
  }
];

const certifications = [
  {
    year: "Dec 2025",
    title: "Certificate of Acceptance & Publication",
    issuer: "International Journal of Research Publication and Reviews",
    description:
      'Accepted for publication of the research paper "Fashion AI Based Virtual Try on System".',
    type: "Research Publication",
    link: "/certificates/fashion-ai-publication.png.jpeg",
  },
  {
    year: "Dec 2025",
    title: "Internship Common Aptitude Test (ICAT)",
    issuer: "ICAT",
    description:
      "Certificate of Participation in the Internship Common Aptitude Test.",
    type: "Achievement",
    link: "/certificates/icat.png.jpeg",
  },
  {
    year: "Aug 2025",
    title: "Introduction to Cybersecurity Awareness",
    issuer: "HP LIFE · HP Foundation",
    description:
      "Completed the HP LIFE online course covering common cybersecurity threats and basic ways to keep online data and information more secure.",
    type: "Certification",
    link: "/certificates/hp-cybersecurity.png.jpeg",
  },
  {
    year: "Feb 2025",
    title: "AI for Beginners",
    issuer: "HP LIFE · HP Foundation",
    description:
      "Completed the HP LIFE online course covering fundamental AI concepts, applications, data importance, business use cases, and ethical implications.",
    type: "Certification",
    link: "/certificates/hp-ai-beginners.png.jpeg",
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <div className="noise" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <header className="nav-wrap">
        <nav className="nav">
          <a href="#home" className="brand" onClick={closeMenu}>
            JS<span>.</span>
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["about", "experience", "projects", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} onClick={closeMenu}>
                {item}
              </a>
            ))}
          </div>

          <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="status-dot" /> Computer Science & Engineering · 2028
            </motion.div>

            <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1 }}
>
  I build
  <span className="gradient-text"> intelligent</span>
  <br />
  digital experiences.
</motion.h1>

            <motion.p
  className="hero-text"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.25 }}
>
  I'm <strong>Jishnu S</strong>, a Computer Science and Engineering student
  building practical solutions across <strong>cloud, AI and software development</strong>.
  I enjoy turning ideas into real-world products that solve meaningful problems.
</motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <a className="button primary" href="#projects">
  Explore my projects <ArrowUpRight size={18} />
</a>
              <a className="button ghost" href="#contact">Get in touch</a>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              <span><MapPin size={15} /> Coimbatore, India</span>
              <span>Open to opportunities</span>
            </motion.div>
          </div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.92, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="profile-halo" />
            <div className="profile-card">
              <div className="profile-top">
                <span>JISHNU S</span>
                <span className="mini-dot" />
              </div>
              <div className="photo-frame">
                <img src="/profile.png" alt="Jishnu S" />
              </div>
              <div className="profile-bottom">
                <div>
                  <small>FOCUS</small>
                  <strong>Cloud · AI · Web</strong>
                </div>
                <div className="initial-mark">JS</div>
              </div>
            </div>

            <motion.div
              className="floating-card floating-one"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Cloud size={18} />
              <span>Cloud Engineering</span>
            </motion.div>

            <motion.div
              className="floating-card floating-two"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 size={18} />
              <span>Full Stack</span>
            </motion.div>
          </motion.div>

          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ChevronDown size={17} />
          </a>
        </section>

        <section id="about" className="section split-section">
          <Reveal className="section-intro">
            <span className="section-number">01 / ABOUT</span>
            <h2>Curious by nature.<br /><span>Practical by choice.</span></h2>
          </Reveal>

          <Reveal delay={0.1} className="about-content">
           <p className="large-copy">
    I’m currently pursuing a{" "}
    <strong>B.E. in Computer Science and Engineering</strong>{" "}
    at Sri Shakthi Institute of Engineering and Technology, Coimbatore.
  </p>
            <p>
              My interests sit at the intersection of cloud technologies, software development,
              data and artificial intelligence. I like learning by building — from intelligent
              attendance systems and voice assistants to scheduling tools and web applications.
            </p>
            <div className="stats">
              <div><strong>7.67</strong><span>Current CGPA</span></div>
              <div><strong>5+</strong><span>Major projects</span></div>
              <div><strong>2028</strong><span>Graduation</span></div>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="section">
          <Reveal className="section-heading">
            <span className="section-number">02 / EXPERIENCE</span>
            <h2>Where I've been <span>learning.</span></h2>
          </Reveal>

          <div className="timeline">
            {experiences.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.1} className="timeline-item">
                <div className="timeline-marker">{String(index + 1).padStart(2, "0")}</div>
                <div className="timeline-main">
                  <div className="timeline-date">{item.date}</div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight className="timeline-arrow" size={20} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <Reveal className="section-heading">
            <span className="section-number">03 / SELECTED WORK</span>
            <h2>Projects that turn ideas<br /><span>into something real.</span></h2>
          </Reveal>

<div className="project-grid">
  {projects.map((project, index) => (
    <Reveal
      key={project.title}
      delay={index * 0.06}
      className={`project-card ${index === 0 ? "featured" : ""}`}
    >
      <div className="project-top">
        <span className="project-number">{project.number}</span>
        <div className="project-icon">{project.icon}</div>
      </div>

      <div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>

      <div className="tag-row">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
{project.live && (
  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="project-link"
  >
    <span>View Live Website</span>
    <ArrowUpRight size={17} />
  </a>
)}
    </Reveal>
  ))}
</div>
        </section>
        <section id="certifications" className="section">
  <div className="container">
    <Reveal>
      <div className="section-heading">
        <span className="eyebrow">CERTIFICATIONS</span>
        <h2>Achievements & Certifications</h2>
        <p>
          Certifications and milestones that reflect my learning journey
          and continuous growth.
        </p>
      </div>
    </Reveal>

<div className="certifications-grid">
  {certifications.map((cert, index) => (
    <Reveal key={cert.title} delay={index * 0.1}>
      <div className="certification-card">
        <div className="certification-meta">
          <div className="certification-year">{cert.year}</div>
          <div className="certification-type">{cert.type}</div>
        </div>

        <div className="certification-content">
          <h3>{cert.title}</h3>

          <span>{cert.issuer}</span>

          <p>{cert.description}</p>

         <a
  className="certificate-button"
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
>
  View Certificate
  <ArrowUpRight size={16} />
</a>
        </div>
      </div>
    </Reveal>
  ))}
</div>
  </div>
</section>

        <section id="skills" className="section skills-section">
          <Reveal className="section-heading">
            <span className="section-number">04 / CAPABILITIES</span>
            <h2>Things I like <span>working with.</span></h2>
          </Reveal>

          <div className="skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Reveal key={skill.name} delay={index * 0.07} className="skill-card">
                  <Icon size={25} strokeWidth={1.5} />
                  <span>{skill.name}</span>
                  <ArrowUpRight size={17} className="skill-arrow" />
                </Reveal>
              );
            })}
          </div>

<Reveal className="tech-strip">
  <span>TECHNOLOGIES</span>
  <div>Java</div>
  <div>Python</div>
  <div>JavaScript</div>
  <div>TypeScript</div>
  <div>React</div>
  <div>Node.js</div>
  <div>Express.js</div>
  <div>Kotlin</div>
  <div>Android</div>
  <div>HTML5</div>
  <div>CSS3</div>
  <div>Tailwind CSS</div>
  <div>MongoDB</div>
  <div>MySQL</div>
  <div>Flask</div>
  <div>Git</div>
  <div>GitHub</div>
  <div>REST APIs</div>
  <div>Docker</div>
  <div>AWS</div>
  <div>OpenCV</div>
  <div>AI / ML</div>
</Reveal>
        </section>

        <section id="contact" className="section contact-section">
          <Reveal className="contact-card">
            <div className="contact-copy">
              <span className="section-number">05 / CONTACT</span>
              <h2>Let's build something<br /><span>worth talking about.</span></h2>
              <p>Have an internship opportunity, project idea or just want to connect? My inbox is open.</p>
              <a className="button primary" href="mailto:jishnus6262@gmail.com">Send me an email <Mail size={18} /></a>
            </div>
            <div className="contact-details">
              <a href="mailto:jishnus6262@gmail.com"><Mail size={18} /> jishnus6262@gmail.com</a>
              <a href="tel:+918680843303"><Phone size={18} /> +91 86808 43303</a>
              <a href="https://github.com/JishnuS-ux" target="_blank" rel="noreferrer"><Github size={18} /> github.com/JishnuS-ux</a>
              <a href="https://www.linkedin.com/in/jishnu-s-733930358/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn profile</a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <span>© 2026 Jishnu S</span>
        <span>Designed & built with React</span>
        <div className="footer-links">
          <a href="https://github.com/JishnuS-ux" target="_blank" rel="noreferrer"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/jishnu-s-733930358/" target="_blank" rel="noreferrer"><Linkedin size={17} /></a>
          <a href="mailto:jishnus6262@gmail.com"><Mail size={17} /></a>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
