import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";
import "./Header.css";

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" }
];
function Header() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: "en" | "es") => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };
  return (
    <header>
      <h1>{t("header")}</h1>

      <div className="dropdown">
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
          <FaGlobe className="icon" />
          {languages.find((lang) => lang.code === i18n.language)?.label ||
            "English"}
          <span className="arrow">▼</span>
        </button>

        {isOpen && (
          <ul className="dropdown-menu">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => changeLanguage(lang.code as "en" | "es")}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <a
        href="https://drive.google.com/file/d/1GABC7AI6Q7nZNEO7uFd-VE3E2uCv3hLH/view?usp=sharing"
        target="_blank"
      >
        <button> Download CV</button>
      </a>
    </header>
  );
}

export default Header;
