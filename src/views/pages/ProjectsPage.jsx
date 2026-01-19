import { useState, useCallback, useMemo } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import { projectController } from "../../controllers/projectController";
import styles from "./ProjectsPage.module.css";

export default function ProjectsPage() {
  const [selectedTechs, setSelectedTechs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const allTechs = useMemo(() => projectController.getAllTechnologies(), []);
  const filteredProjects = useMemo(
    () =>
      projectController.getFilteredProjects({
        technologies: selectedTechs,
        search: searchTerm,
      }),
    [selectedTechs, searchTerm]
  );

  const toggleTech = useCallback((tech) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedTechs([]);
    setSearchTerm("");
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  return (
    <Layout>
      <div className={styles.projectsPage}>
        <div className={styles.header}>
          <div className={styles.container}>
            <h1>All Projects</h1>
            <p>
              Explore my complete portfolio of cloud engineering and DevOps
              projects
            </p>
          </div>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.searchBox}>
              <input
                type="search"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={handleSearchChange}
                aria-label="Search projects"
              />
            </div>

            <div className={styles.filterGroup}>
              <h3>Filter by Technology:</h3>
              <div className={styles.techFilters}>
                {allTechs.map((tech) => (
                  <button
                    key={tech}
                    className={`${styles.filterBtn} ${
                      selectedTechs.includes(tech) ? styles.active : ""
                    }`}
                    onClick={() => toggleTech(tech)}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>

            {(selectedTechs.length > 0 || searchTerm) && (
              <button className={styles.clearBtn} onClick={clearFilters}>
                Clear Filters
              </button>
            )}

            <p className={styles.resultCount}>
              Showing {filteredProjects.length} project
              {filteredProjects.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <div className={styles.projectsSection}>
          <div className={styles.container}>
            {filteredProjects.length > 0 ? (
              <div className={styles.grid}>
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className={styles.noResults}>
                <p>No projects found matching your filters.</p>
                <button className={styles.resetBtn} onClick={clearFilters}>
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
