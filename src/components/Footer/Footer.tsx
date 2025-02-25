import "./Footer.css";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp, FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Footer() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer className="footer">
      <h4>{t("contact")}</h4>
      <div className="footer-content">
        <div className="footer-contact">
          <p>
            <CiMail className="icon" title="Mail" />
            <a href="mailto:hector2001rdz@gmail.com">hector2001rdz@gmail.com</a>
            <FaCopy
              className="copy-icon"
              title="Copy"
              onClick={() => handleCopy("hector2001rdz@gmail.com", "email")}
            />
            {copied === "email" && (
              <span className="copied-message">{t("copied")}</span>
            )}
          </p>
          <p>
            <FaWhatsapp className="icon" title="WhatsApp" />
            <a
              href="https://wa.me/524961245077"
              target="_blank"
              rel="noopener noreferrer"
            >
              +52 4961245077
            </a>
            <FaCopy
              className="copy-icon"
              title="Copy"
              onClick={() => handleCopy("+52 4961240577", "whatsapp")}
            />
            {copied === "whatsapp" && (
              <span className="copied-message">{t("copied")}</span>
            )}
          </p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/EktorVT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" title="GitHub" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/jose-hector-rodriguez-rodriguez-b02229273/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" title="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Héctor Rodríguez - Front-End Developer
      </p>
    </footer>
  );
}

export default Footer;
