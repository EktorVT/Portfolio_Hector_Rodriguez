import "./Skills.css";
import Skill from "../Skill/Skill";
import { useTranslation } from "react-i18next";
import Container from "../Container/Container";

const skills = [
  {
    name: "React",
    src: "/Portfolio_Hector_Rodriguez/react.webp",
    title: "React JS"
  },
  {
    name: "HTML",
    src: "/Portfolio_Hector_Rodriguez/html-5.webp",
    title: "HTML 5"
  },
  { name: "CSS", src: "/Portfolio_Hector_Rodriguez/css3.webp", title: "CSS" },
  {
    name: "JS",
    src: "/Portfolio_Hector_Rodriguez/js.webp",
    title: "Javascript"
  },
  { name: "SQL", src: "/Portfolio_Hector_Rodriguez/sql.webp", title: "SQL" }
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
          src="/Portfolio_Hector_Rodriguez/vite-js.webp"
          title="Vite JS"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/Portfolio_Hector_Rodriguez/github.webp"
          title="GitHub"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/Portfolio_Hector_Rodriguez/slack.webp"
          title="Slack"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/Portfolio_Hector_Rodriguez/npm.webp"
          title="npm"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/Portfolio_Hector_Rodriguez/figma.webp"
          title="Figma"
          className="skill_logo"
          loading="lazy"
        />
        <img
          src="/Portfolio_Hector_Rodriguez/docker.webp"
          title="Docker"
          className="skill_logo"
          loading="lazy"
        />
      </div>
    </Container>
  );
}

export default Skills;
