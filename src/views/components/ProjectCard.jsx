import { memo } from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          <span className={styles.viewBtn}>View Project</span>
        </div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.technologies}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className={styles.badge}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={styles.badge}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
});

export default ProjectCard;
