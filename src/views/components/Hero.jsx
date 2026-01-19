import styles from "./Hero.module.css";
import { Link } from "react-router-dom";
import { useCallback } from "react";

export default function Hero({ totalProjects = 3, uniqueTechs = 5 }) {
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
        <div className={styles.content}>
          <div className={styles.badge}>Welcome to my portfolio</div>
          <h1 className={styles.title}>
            Cloud Engineer & DevOps Specialist
          </h1>
          <p className={styles.subtitle}>
            Building scalable, secure, and efficient cloud infrastructure with
            modern DevOps practices. Expertise in AWS, Kubernetes, and
            Infrastructure as Code.
          </p>
          <div className={styles.buttons}>
            <a
              href="#projects"
              className={styles.btnPrimary}
              onClick={scrollToProjects}
            >
              View My Work
            </a>
            <Link to="/projects" className={styles.btnSecondary}>
              All Projects
            </Link>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{totalProjects}+</div>
              <div className={styles.statLabel}>Major Projects</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>{uniqueTechs}+</div>
              <div className={styles.statLabel}>Cloud Platforms</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Automated</div>
            </div>
          </div>
        </div>

        <div className={styles.illustration}>
          <div className={styles.circle}></div>
          <div className={styles.circle2}></div>
          <svg viewBox="0 0 400 400" className={styles.svg}>
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4aa" />
                <stop offset="100%" stopColor="#00a88f" />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#grad)" opacity="0.1" />
            <circle cx="200" cy="200" r="100" fill="url(#grad)" opacity="0.05" />
            <rect x="150" y="150" width="100" height="100" fill="url(#grad)" opacity="0.15" rx="10" />
          </svg>
        </div>
      </div>
    </section>
  );
}
