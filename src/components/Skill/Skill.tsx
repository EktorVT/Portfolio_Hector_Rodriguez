import "./Skill.css";

interface SkillProps {
  name: string;
  src: string;
  title: string;
}

function Skill({ name, title, src }: SkillProps) {
  return (
    <div className="skill_container">
      <h2 className="skill_text">
        <img src={src} title={title} className="skill_logo" />
        <br />
        {name}
      </h2>
    </div>
  );
}

export default Skill;
