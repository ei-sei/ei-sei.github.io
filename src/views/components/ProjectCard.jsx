// Author: Sheikh Khaled Ahmed (ei-sei)
import { memo } from "react";
import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";

const ProjectCard = memo(function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className={styles.card}>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.shortDescription}</p>

      <div className={styles.tags}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.tag}>
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
});

export default ProjectCard;
