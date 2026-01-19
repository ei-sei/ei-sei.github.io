import { lazy, Suspense } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/global.css";

// Lazy load pages for code splitting
const HomePage = lazy(() => import("./views/pages/HomePage"));
const ProjectsPage = lazy(() => import("./views/pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("./views/pages/ProjectDetailPage"));

// Loading fallback component
const PageLoader = () => (
  <div style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    color: "var(--color-text-secondary)",
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
