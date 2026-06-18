// © Sheikh Khaled Ahmed (ei-sei)
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Contact</h2>
          <p>Let's discuss your cloud infrastructure needs</p>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <div>
              <h3>Email</h3>
              <a href="mailto:sk.ahm2019@gmail.com">sk.ahm2019@gmail.com</a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <h3>LinkedIn</h3>
              <a href="https://www.linkedin.com/in/sheikhkhaled-ahmed/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/sheikhkhaled-ahmed/
              </a>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div>
              <h3>GitHub</h3>
              <a href="https://github.com/ei-sei" target="_blank" rel="noopener noreferrer">
                github.com/ei-sei
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
