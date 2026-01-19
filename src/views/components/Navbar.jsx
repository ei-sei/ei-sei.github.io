import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
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

  const handleSectionClick = useCallback((e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    // Check if we're on the home page (HashRouter uses hash for paths)
    const isHomePage = location.pathname === "/";

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      // Navigate to home, then scroll after navigation
      navigate("/");
      // Use setTimeout to allow navigation to complete
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  }, [location.pathname, navigate, scrollToSection]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Sheikh Khaled Ahmed
        </Link>

        <button
          className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                setIsOpen(false);
                if (location.pathname === "/") {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(e) => handleSectionClick(e, "projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(e) => handleSectionClick(e, "skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSectionClick(e, "contact")}
            >
              Contact
            </a>
          </li>
          <li>
            <Link to="/projects" className={styles.btnLink} onClick={() => setIsOpen(false)}>
              View All
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
