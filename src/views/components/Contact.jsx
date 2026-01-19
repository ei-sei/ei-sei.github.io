import { useState, useEffect, useCallback } from "react";
import styles from "./Contact.module.css";

const SUBMISSION_TIMEOUT = 5000;
const INITIAL_FORM_STATE = { name: "", email: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), SUBMISSION_TIMEOUT);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData(INITIAL_FORM_STATE);
  }, [formData]);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Get In Touch</h2>
          <p>Let's discuss your cloud infrastructure needs</p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <div className={styles.icon}>✉️</div>
              <div>
                <h3>Email</h3>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>💼</div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.icon}>🐙</div>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  github.com/yourprofile
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>

            {submitted && (
              <div className={styles.successMessage}>
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
