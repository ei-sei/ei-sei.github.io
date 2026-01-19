import styles from "./ProjectDetail.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { projectController } from "../../controllers/projectController";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectController.getProjectById(id);
  const [lightboxImage, setLightboxImage] = useState(null);

  const openLightbox = useCallback((image) => {
    setLightboxImage(image);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && lightboxImage) {
        closeLightbox();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage, closeLightbox]);

  if (!project) {
    return (
      <div className={styles.notFound}>
        <h1>Project not found</h1>
        <Link to="/projects">Back to Projects</Link>
      </div>
    );
  }

  return (
    <article className={styles.detail}>
      <div className={styles.header}>
        <Link to="/projects" className={styles.backBtn}>
          ← Back to Projects
        </Link>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.intro}>{project.shortDescription}</p>
      </div>

      <div className={styles.container}>
        <div className={styles.mainContent}>
          {/* Hero Image */}
          <section className={styles.heroImage}>
            <img
              src={project.thumbnail}
              alt={project.title}
              className={styles.image}
              loading="eager"
            />
          </section>

          {/* Overview */}
          <section className={styles.section}>
            <h2>Overview</h2>
            <p>{project.fullDescription}</p>
          </section>

          {/* Features */}
          <section className={styles.section}>
            <h2>Key Features</h2>
            <ul className={styles.featuresList}>
              {project.features.map((feature) => (
                <li key={feature}>
                  <span className={styles.checkmark}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          {/* Screenshots Gallery */}
          <section className={styles.section}>
            <h2>Project Gallery</h2>
            <div className={styles.gallery}>
              {project.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className={styles.galleryImage}
                  loading="lazy"
                  onClick={() => openLightbox(image)}
                />
              ))}
            </div>
          </section>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <div className={styles.lightbox} onClick={closeLightbox}>
              <button
                className={styles.lightboxClose}
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                ×
              </button>
              <img
                src={lightboxImage}
                alt="Enlarged view"
                className={styles.lightboxImage}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          {/* Challenges & Solutions */}
          <section className={styles.section}>
            <h2>Challenges & Solutions</h2>
            <div className={styles.challengeBox}>
              <h3 className={styles.subtitle}>Challenges</h3>
              <p>{project.challenges}</p>
            </div>
            <div className={styles.solutionBox}>
              <h3 className={styles.subtitle}>Solutions Implemented</h3>
              <p>{project.solutions}</p>
            </div>
          </section>

          {/* Technologies */}
          <section className={styles.section}>
            <h2>Technologies Used</h2>
            <div className={styles.techGrid}>
              {project.technologies.map((tech) => (
                <div key={tech} className={styles.techItem}>
                  <span className={styles.techIcon}>🔧</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={styles.cta}>
            <h2>Want to see more?</h2>
            <div className={styles.ctaButtons}>
              <a
                href={project.githubUrl}
                className={styles.btnGithub}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className={styles.btnLive}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Live Project
                </a>
              )}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}
