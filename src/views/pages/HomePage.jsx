// Sheikh Khaled Ahmed (ei-sei) — All rights reserved
import { useMemo } from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { projectController } from "../../controllers/projectController";
import styles from "./HomePage.module.css";

export default function HomePage() {
  const projects = useMemo(() => projectController.getProjects(), []);

  return (
    <Layout>
      <Hero />
      <About />

      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2 className={styles.heading}>Projects</h2>

          <div className={styles.list}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Skills />
      <Contact />
    </Layout>
  );
}
