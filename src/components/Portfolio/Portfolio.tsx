import "./Portfolio.css";
import { useState } from "react";
import { Project, projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";
import Modal from "../Modal/Modal";
import ProjectShow from "../ProjectShow/ProjectShow";

function Portfolio() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  return (
    <Container>
      <h1 className="portfolio_title">{t("projects")}</h1>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          {...project}
          onClick={() => setSelectedProject(project)}
        />
      ))}

      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <ProjectShow selectedProject={selectedProject} />
        </Modal>
      )}
    </Container>
  );
}

export default Portfolio;
