const projects = [
  {
    tag: "MERN Stack",
    title: "Trail Tracker",
    sub: "Virtual Travel Journal & Map Integration",
    desc: "Full-stack travel journaling platform with secure authentication, RESTful APIs, and interactive maps for visualizing travel history. MongoDB schemas store trip logs and geographic coordinates.",
  },
  {
    tag: "Machine Learning",
    title: "AI Smart Health Analyzer",
    sub: "Heart Disease Prediction & Cancer Detection",
    desc: "AI-powered healthcare system integrating models for heart disease prediction and cancer detection, with a user-friendly interface for early health risk analysis.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="eyebrow center">Projects</p>
      <h2 className="section-title center">Selected work</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div className="glass project-card" key={p.title}>
            <p className="project-tag">{p.tag}</p>
            <h3>{p.title}</h3>
            <p className="project-sub">{p.sub}</p>
            <p className="project-desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
