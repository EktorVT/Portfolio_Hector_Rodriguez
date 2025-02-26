import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  website?: string;
  github?: string;
}

function ProjectCard({
  name,
  description,
  technologies,
  image,
  website,
  github
}: ProjectCardProps) {
  const { t } = useTranslation();
  return (
    <div className="project">
      <h3>{t(name)}</h3>
      <img src={image} alt={name} title={t(name)} className="project_image" />
      <p>{t(description)}</p>

      <div className="project_links">
        {website && (
          <a href={website} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt title="Link" />
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub title="GitHub" />
          </a>
        )}
      </div>

      <div className="project_technologies">
        {technologies.map((tech, index) => (
          <span key={index} title={tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
