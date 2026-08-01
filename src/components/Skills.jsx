const skillGroups = [
  { title: "Languages", items: "Java, JavaScript, SQL" },
  { title: "Frontend", items: "React.js, HTML, CSS, Bootstrap" },
  { title: "Backend", items: "Node.js, Express.js, REST APIs" },
  { title: "Databases", items: "MongoDB, MySQL" },
  { title: "Tools", items: "Git, GitHub, Postman, VS Code" },
  { title: "Core Concepts", items: "DSA, OOP, DBMS" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <p className="eyebrow center">Skills</p>
      <h2 className="section-title center">What I work with</h2>
      <div className="skills-grid">
        {skillGroups.map((s) => (
          <div className="glass skill-card" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
