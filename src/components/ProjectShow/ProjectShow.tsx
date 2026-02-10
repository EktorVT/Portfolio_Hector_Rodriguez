import { Project } from "../../data/projects";
import { useTranslation } from "react-i18next";
import "./ProjectShow.css";

interface ProjectShowProps {
  selectedProject: Project;
}

export default function ProjectShow({ selectedProject }: ProjectShowProps) {
  const { t } = useTranslation();
  return (
    <div className="project-show">
      <h2>{t(selectedProject.name)}</h2>
      <img src={selectedProject.image} alt={selectedProject.name} />
      <p style={{ whiteSpace: "pre-line" }}>
        {t(
          `${selectedProject.content ? selectedProject.content : selectedProject.description}`
        )}
      </p>

      <h4>{t("technologies")}</h4>
      <ul>
        {selectedProject.technologies.map((tech: string, i: number) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      {selectedProject.images ? (
        <>
          <h4>{t("photos")}</h4>
          {selectedProject.images.map((image: string, i: number) => (
            <img key={i} src={image} />
          ))}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
