import { useTranslation } from "react-i18next";
import "./AboutMe.css";

function AboutMe() {
  const { t } = useTranslation();
  return (
    <div className="about_me_container">
      <img src="../src/images/perfil.jpg" alt="" />
      <div className="text-content">
        <h1>Jose Hector Rodriguez Rodriguez</h1>
        <h2>{t("degree")}</h2>
      </div>
      <p className="about_me_description">{t("about_me")}</p>
      <a
        href="https://drive.google.com/file/d/1GABC7AI6Q7nZNEO7uFd-VE3E2uCv3hLH/view?usp=sharing"
        target="_blank"
      >
        <button className="about_me_cta">{t("download")}</button>
      </a>
    </div>
  );
}

export default AboutMe;
