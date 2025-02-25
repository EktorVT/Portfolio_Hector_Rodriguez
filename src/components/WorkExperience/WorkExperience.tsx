import "./WorkExperience.css";
import { useTranslation } from "react-i18next";
import {
  FaLaptopCode,
  FaMapMarkerAlt,
  FaCalendar,
  FaTasks,
  FaCogs,
  FaCode,
  FaGithub,
  FaDocker,
  FaLinux,
  FaChalkboardTeacher
} from "react-icons/fa";
import {
  SiReact,
  SiNestjs,
  SiHtml5,
  SiCss3,
  SiJavascript
} from "react-icons/si";

function WorkExperience() {
  const { t } = useTranslation();
  return (
    <div className="work_experience_container">
      <h1>{t("work_title")}</h1>

      <div className="work">
        <h3>
          <FaChalkboardTeacher /> {t("work1_name")}
        </h3>
        <p className="work_company">
          <FaMapMarkerAlt /> {t("work1_place")}
        </p>
        <p className="work_company">
          <FaCalendar /> {t("work1_date")}
        </p>
        <p className="work_description">
          <FaTasks className="work_description_icon" />
          {t("work1_description1")}
        </p>
        <p className="work_description">
          <FaCode className="work_description_icon" /> {t("work1_description2")}
        </p>
        <div className="work_technologies">
          <SiHtml5 title="HTML 5" /> <span>HTML</span> |
          <SiCss3 title="CSS 3" /> <span>CSS</span> |
          <SiJavascript title="Javascript" /> <span>JavaScript</span>
        </div>
      </div>

      <div className="work">
        <h3>
          <FaLaptopCode /> {t("work2_name")}
        </h3>
        <p className="work_company">
          <FaMapMarkerAlt /> {t("work2_place")}
        </p>
        <p className="work_company">
          <FaCalendar /> {t("work2_date")}
        </p>

        <p className="work_description">
          <FaTasks className="work_description_icon" />
          {t("work2_description1")}
        </p>
        <p className="work_description">
          <FaCogs className="work_description_icon" /> {t("work2_description2")}
        </p>
        <p className="work_description">
          <FaCode className="work_description_icon" /> {t("work2_description3")}
        </p>
        <div className="work_technologies">
          <SiReact title="React Js" /> <span>React JS</span> |
          <SiReact title="React Native" /> <span>React Native</span> |
          <FaGithub title="GitHub" /> <span>GitHub Workflows</span> |
          <FaDocker title="Docker" /> <span>Docker</span> |
          <SiNestjs title="NestJs" /> <span>NestJS</span> |
          <FaLinux title="Linux" /> <span>WSL</span>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
