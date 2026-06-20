// Portfolio by Sheikh Khaled Ahmed — github.com/ei-sei
import styles from "./ProjectDetail.module.css";
import { useParams, Link } from "react-router-dom";
import { useState, useCallback, useEffect } from "react";
import { projectController } from "../../controllers/projectController";

const ACRONYMS = new Set([
  "aws", "vpc", "ecs", "alb", "nlb", "api", "cdn", "iam", "acm", "dns",
  "ec2", "s3", "waf", "cli", "vpn", "pwa", "jwt", "ci", "cd",
]);

function getImageCaption(url) {
  const filename = url.split("/").pop().split("?")[0];
  const withoutExt = filename.replace(/\.[^.]+$/, "");
  const spaced = withoutExt
    .replace(/[-_]+/g, " ")
    .replace(/([a-zA-Z])(\d)/g, "$1 $2");

  return spaced
    .split(" ")
    .filter(Boolean)
    .map((word) => {
      const lower = word.toLowerCase();
      if (ACRONYMS.has(lower)) return lower.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

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
          {/* Hero Image or Video */}
          <section className={styles.heroImage}>
            {project.demoVideo ? (
              <video
                src={project.demoVideo}
                className={styles.video}
                controls
                playsInline
                preload="metadata"
              />
            ) : (
              <img
                src={project.thumbnail}
                alt={project.title}
                className={styles.image}
                loading="eager"
              />
            )}
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
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Screenshots Gallery */}
          {project.images.length > 0 && (
            <section className={styles.section}>
              <h2>Project Gallery</h2>
              <div className={styles.gallery}>
                {project.images.map((image) => (
                  <figure
                    key={image}
                    className={styles.galleryItem}
                    onClick={() => openLightbox(image)}
                  >
                    <img
                      src={image}
                      alt={getImageCaption(image)}
                      className={styles.galleryImage}
                      loading="lazy"
                    />
                    <figcaption className={styles.galleryCaption}>
                      {getImageCaption(image)}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

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
              <figure
                className={styles.lightboxFigure}
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt={getImageCaption(lightboxImage)}
                  className={styles.lightboxImage}
                />
                <figcaption className={styles.lightboxCaption}>
                  {getImageCaption(lightboxImage)}
                </figcaption>
              </figure>
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
                <span key={tech} className={styles.techItem}>
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* External APIs */}
          {project.apis?.length > 0 && (
            <section className={styles.section}>
              <h2>External APIs</h2>
              <div className={styles.techGrid}>
                {project.apis.map((api) => (
                  <span key={api} className={styles.techItem}>
                    {api}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <section className={styles.cta}>
            <h2>Want to see more?</h2>
            <div className={styles.ctaButtons}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className={styles.btnGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code on GitHub
                </a>
              )}
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
