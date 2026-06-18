// © Sheikh Khaled Ahmed — github.com/ei-sei
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <a href="https://github.com/ei-sei" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sheikhkhaled-ahmed/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:sk.ahm2019@gmail.com">Email</a>
        </div>

        <p className={styles.copyright}>
          © {currentYear} Sheikh Khaled Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
