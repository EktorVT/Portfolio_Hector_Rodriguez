import "./Footer.css";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div>
        <h4>{t("contact")}</h4>
        <p>
          <CiMail />
          hector2001rdz@gmail.com
        </p>
        <p>
          <FaWhatsapp />
          +52 4961240577
        </p>
      </div>
    </footer>
  );
}

export default Footer;
