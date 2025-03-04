import "./Portfolio.css";
import { projects } from "../../data/projects";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";

function Portfolio() {
  const { t } = useTranslation();
  return (
    <Container>
      <h1 className="portfolio_title">{t("projects")}</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Container>
  );
}

export default Portfolio;
