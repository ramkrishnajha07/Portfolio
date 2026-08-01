const techStack = ["React", "Node.js", "MongoDB", "JavaScript", "Java"];

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero-text">
        <p className="eyebrow">Computer Science Undergraduate</p>
        <h1 className="hero-title">Hi, I'm Ram Krishna Jha</h1>
        <p className="hero-sub">
          I build full-stack web apps with the MERN stack — clean UIs, solid
          APIs, and databases that don't fall over.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">Get in touch</a>
          <a href="#projects" className="btn btn-ghost">View projects</a>
        </div>
        <div className="hero-meta">
          <span>Uttar Pradesh, India</span>
          <a href="https://github.com/ramkrishnajha07" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/ram-krishna-jha-b2902a31a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <div className="tech-row">
          {techStack.map((t) => (
            <span className="tech-pill" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="hero-visual">
        <div className="avatar-card">
          <div className="avatar-circle">RJ</div>
          <p className="avatar-role">MERN Stack Developer</p>
          <p className="avatar-status">Open to opportunities</p>
        </div>
      </div>
    </section>
  );
}
