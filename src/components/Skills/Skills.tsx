import "./Skills.css";
import Skill from "../Skill/Skill";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";

const skills = [
  { name: "React", src: "/react.webp", title: "React JS" },
  { name: "HTML", src: "/html-5.webp", title: "HTML 5" },
  { name: "CSS", src: "/css3.webp", title: "CSS" },
  { name: "JS", src: "/js.webp", title: "Javascript" },
  { name: "SQL", src: "/sql.webp", title: "SQL" }
];

function Skills() {
  const { t } = useTranslation();

  return (
    <Container>
      <h1 className="skills_title">{t("skills")}</h1>
      <div className="skills_list">
        {skills.map(({ name, src, title }) => (
          <Skill key={name} name={name} src={src} title={title} />
        ))}
      </div>
      <h1 className="skills_title">{t("technologies")}</h1>
      <div className="skills_list">
        <img
          src="/vite-js.webp"
          title="Vite JS"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/github.webp"
          title="GitHub"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/slack.webp"
          title="Slack"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/npm.webp"
          title="npm"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/figma.webp"
          title="Figma"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/docker.webp"
          title="Docker"
          className="skill_logo"
          loading="lazy"
        />
      </div>
    </Container>
  );
}

export default Skills;
