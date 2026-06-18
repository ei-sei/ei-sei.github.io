// Sheikh Khaled Ahmed — github.com/ei-sei
import styles from "./Navbar.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

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
          SHEIKH KHALED AHMED
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
            <a
              href="https://ska-cloud.hashnode.dev/"
              className={styles.btnLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
          </li>
          <li>
            <button
              className={styles.themeToggle}
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              <span key={theme} className={styles.themeIcon}>
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
