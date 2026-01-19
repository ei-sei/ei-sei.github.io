// Project Controller - Business Logic
import { projectsData } from "../models/projectsData.js";

// Cache for all technologies to avoid recalculation
let technologiesCache = null;

export const projectController = {
  // Get all projects
  getProjects: () => {
    return projectsData;
  },

  // Get single project by ID
  getProjectById: (id) => {
    const numId = parseInt(id);
    return projectsData.find((project) => project.id === numId);
  },

  // Filter projects by technology
  filterProjectsByTech: (tech) => {
    if (!tech) return projectsData;
    const lowerTech = tech.toLowerCase();
    return projectsData.filter((project) =>
      project.technologies.some(
        (t) => t.toLowerCase().includes(lowerTech)
      )
    );
  },

  // Get all technologies (cached)
  getAllTechnologies: () => {
    if (!technologiesCache) {
      technologiesCache = Array.from(
        new Set(projectsData.flatMap((p) => p.technologies))
      ).sort();
    }
    return technologiesCache;
  },

  // Get projects by multiple filters
  getFilteredProjects: (filters = {}) => {
    let filtered = projectsData;

    if (filters.search) {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(search) ||
          p.shortDescription.toLowerCase().includes(search) ||
          p.technologies.some((t) => t.toLowerCase().includes(search))
      );
    }

    if (filters.technologies?.length > 0) {
      const techSet = new Set(filters.technologies);
      filtered = filtered.filter((p) =>
        p.technologies.some((pt) => techSet.has(pt))
      );
    }

    return filtered;
  },
};
