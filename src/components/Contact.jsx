import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Opens the visitor's email app with the message pre-filled — no backend
  // required. Swap for a Formspree/EmailJS POST if you want silent submits
  // (see README.md).
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:Jharamkrishna4059@gmail.com?subject=${subject}&body=${body}`;

    setNote("Opening your email app…");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setNote(""), 4000);
  };

  return (
    <section id="contact" className="section">
      <p className="eyebrow center">Contact</p>
      <h2 className="section-title center">Let's work together</h2>

      <div className="contact-grid">
        <div className="glass panel contact-info">
          <h3 className="panel-heading">Reach me directly</h3>
          <a className="contact-line" href="mailto:Jharamkrishna4059@gmail.com">
            <span className="contact-icon">✉</span> Jharamkrishna4059@gmail.com
          </a>
          <a className="contact-line" href="tel:+916207845753">
            <span className="contact-icon">📞</span> +91 6207845753
          </a>
          <div className="contact-line">
            <span className="contact-icon">📍</span> Uttar Pradesh, India
          </div>
          <a
            className="contact-line"
            href="https://github.com/ramkrishnajha07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">🔗</span> github.com/ramkrishnajha07
          </a>
          <a
            className="contact-line"
            href="https://linkedin.com/in/ram-krishna-jha-b2902a31a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-icon">💼</span> linkedin.com/in/ram-krishna-jha-b2902a31a
          </a>
        </div>

        <form className="glass panel contact-form" onSubmit={handleSubmit}>
          <h3 className="panel-heading">Send a message</h3>

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="What would you like to say?"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn btn-primary form-submit">
            Send message
          </button>
          <p className="form-note">{note}</p>
        </form>
      </div>
    </section>
  );
}
