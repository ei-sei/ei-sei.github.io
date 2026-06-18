// Project Controller - Business Logic | Sheikh Khaled Ahmed (ei-sei)
import { projectsData } from "../models/projectsData.js";

// Curated, in-demand skills shown in the filter UI, mapped to the
// raw technology keywords they should match against project data.
const FILTERABLE_SKILLS = {
  AWS: ["aws", "amazon"],
  Docker: ["docker"],
  Terraform: ["terraform"],
  Go: ["go"],
  Python: ["python"],
  React: ["react"],
  PostgreSQL: ["postgresql"],
  Nginx: ["nginx"],
  Linux: ["linux"],
  "CI/CD": ["github actions"],
  IAM: ["iam"],
  Redis: ["redis"],
};

export const projectController = {
  // Get all projects
  getProjects: () => {
    return projectsData;
  },

  // Get featured projects for homepage
  getFeaturedProjects: () => {
    return projectsData.filter((project) => project.featured);
  },

  // Get single project by ID
  getProjectById: (id) => {
    const numId = parseInt(id);
    return projectsData.find((project) => project.id === numId);
  },

  // Curated list of in-demand skills for the filter UI
  getFilterableSkills: () => {
    return Object.keys(FILTERABLE_SKILLS);
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
      filtered = filtered.filter((p) =>
        filters.technologies.some((skill) => {
          const keywords = FILTERABLE_SKILLS[skill] || [skill.toLowerCase()];
          return p.technologies.some((pt) =>
            keywords.some((keyword) => pt.toLowerCase().includes(keyword))
          );
        })
      );
    }

    return filtered;
  },
};
