import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Sheikh Khaled Ahmed</h3>
            <p>Cloud Engineer Portfolio</p>
          </div>

          <div className={styles.links}>
            <a href="https://github.com/ei-sei" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sheikhkhaled-ahmed/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>

          <div className={styles.info}>
            <p>© {currentYear} All rights reserved</p>
            <p>Built with React & Vite</p>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <p>Designed & Developed with passion for cloud infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
