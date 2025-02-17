import "./Skills.css";
import Skill from "../Skill/Skill";
import { useTranslation } from "react-i18next";

const skills = [
  { name: "React", src: "/react.png", title: "React JS" },
  { name: "HTML", src: "/html-5.png", title: "HTML 5" },
  { name: "CSS", src: "/css3.jpg", title: "CSS" },
  { name: "JS", src: "/js.png", title: "Javascript" },
  { name: "SQL", src: "/sql.png", title: "SQL" }
];

function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills_container">
      <h1>{t("skills")}</h1>
      <div className="skills_list">
        {skills.map(({ name, src, title }) => (
          <Skill key={name} name={name} src={src} title={title} />
        ))}
      </div>
      <h1>{t("technologies")}</h1>
      <div className="skills_list">
        <img src="/vite-js.png" title="Vite JS" className="skill_logo" />
        <img src="/github.png" title="GitHub" className="skill_logo" />
        <img src="/slack.png" title="Slack" className="skill_logo" />
        <img src="/npm.png" title="npm" className="skill_logo" />
        <img src="/figma.png" title="Figma" className="skill_logo" />
        <img src="/docker.png" title="Docker" className="skill_logo" />
      </div>
    </div>
  );
}

export default Skills;
