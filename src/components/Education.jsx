const education = [
  {
    school: "Galgotias University, Greater Noida",
    date: "Jun 2022 – Jun 2026",
    detail: "B.Tech, Computer Science and Engineering — CGPA: 8.0",
  },
  {
    school: "DAV Public School, Bihar",
    date: "Apr 2019 – Mar 2021",
    detail: "Senior Secondary (Class XII), PCM — 73%",
  },
  {
    school: "Rose Public School, Bihar",
    date: "Apr 2019",
    detail: "Secondary (Class X) — 80%",
  },
];

const achievements = [
  "Active member of TechnoJam, the college technical club",
  "Solved 100+ DSA problems on LeetCode and GeeksforGeeks",
  "Led a 5-member team at the Code Astra Hackathon",
  "Web Development Virtual Internship — EduSkill & AICTE",
  "AI-ML Virtual Internship — EduSkill & AICTE",
];

export default function Education() {
  return (
    <section id="education" className="section">
      <p className="eyebrow center">Education</p>
      <h2 className="section-title center">Academic background</h2>

      <div className="glass panel timeline">
        {education.map((e) => (
          <div className="timeline-item" key={e.school}>
            <div className="timeline-top">
              <h3>{e.school}</h3>
              <span className="timeline-date">{e.date}</span>
            </div>
            <p>{e.detail}</p>
          </div>
        ))}
      </div>

      <div className="glass panel achievements-panel">
        <h3 className="panel-heading">Achievements &amp; Certifications</h3>
        <ul className="bullet-list">
          {achievements.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
