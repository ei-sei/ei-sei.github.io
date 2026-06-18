// © Sheikh Khaled Ahmed — github.com/ei-sei
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          © {currentYear} Sheikh Khaled Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
