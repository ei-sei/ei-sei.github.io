// Author: Sheikh Khaled Ahmed (ei-sei)
import styles from "./Hero.module.css";
import { useCallback } from "react";

export default function Hero() {
  const scrollToProjects = useCallback((e) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const navbarHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.label}>DevOps & Cloud Engineer</p>
        <h1 className={styles.name}>Sheikh Khaled Ahmed</h1>
        <p className={styles.tagline}>
          Building scalable infrastructure. AWS · Kubernetes · Terraform ·
          Docker · Serverless
        </p>

        <div className={styles.buttons}>
          <a
            href="#projects"
            className={styles.btnPrimary}
            onClick={scrollToProjects}
          >
            View Projects
          </a>
          <a
            href="https://github.com/ei-sei"
            className={styles.btnSecondary}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
