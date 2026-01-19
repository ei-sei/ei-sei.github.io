import { useMemo } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";
import { projectController } from "../../controllers/projectController";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const { projects, totalProjects, uniqueTechs } = useMemo(() => {
    const allProjects = projectController.getProjects();
    return {
      projects: allProjects.slice(0, 3),
      totalProjects: allProjects.length,
      uniqueTechs: projectController.getAllTechnologies().length,
    };
  }, []);

  return (
    <Layout>
      <Hero totalProjects={totalProjects} uniqueTechs={uniqueTechs} />

      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Featured Projects</h2>
            <p>
              Showcasing my expertise in cloud engineering and DevOps
            </p>
          </div>

          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className={styles.viewAll}>
            <Link to="/projects" className={styles.btn}>
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      <Skills />
      <Contact />
    </Layout>
  );
}
