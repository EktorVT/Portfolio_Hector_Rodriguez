import "./Portfolio.css";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <div className="portfolio_container">
      <h1>{t("projects")}</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Portfolio;
