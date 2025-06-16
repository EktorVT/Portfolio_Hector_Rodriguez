import { useTranslation } from "react-i18next";
import "./AboutMe.css";
import { useState, useEffect } from "react";
import Container from "../Container/Container";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useModal } from "../../context/ModalContext/ModalContext";

function AboutMe() {
  const { t } = useTranslation();
  const { openModal } = useModal();

  const fullText = "Jose Hector Rodriguez Rodriguez";
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDeleting = 2000;

    if (!isDeleting && charIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === fullText.length) {
      setTimeout(() => setIsDeleting(true), pauseBeforeDeleting);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
    }
  }, [charIndex, isDeleting]);

  const profileImageUrl: string = "/Portfolio_Hector_Rodriguez/perfil.jpg";

  const handleImageClick = (): void => {
    openModal(
      <img
        src={profileImageUrl}
        alt={t(
          "alt_profile_large",
          "Perfil ampliado de Jose Hector Rodriguez Rodriguez"
        )}
      />
    );
  };

  return (
    <Container>
      <img
        src={profileImageUrl}
        alt={t(
          "alt_profile_thumb",
          "Foto de perfil de Jose Hector Rodriguez Rodriguez"
        )}
        className="about_me_img"
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
        // Añadir tabIndex para accesibilidad de teclado si es interactiva
        tabIndex={0}
        onKeyDown={(e: React.KeyboardEvent<HTMLImageElement>) => {
          if (e.key === "Enter" || e.key === " ") handleImageClick();
        }}
      />
      <div className="text-content">
        <h1>
          {displayedText}
          <span className="cursor">|</span>
        </h1>
        <h2>{t("degree")}</h2>
      </div>
      <p className="about_me_description">{t("about_me")}</p>
      <p className="about_me_description">
        <FaMapMarkerAlt />
        Salinas de Hidalgo, San Luis Potosí, México.
        <span> {t("about_me_location")} 🌍</span>
      </p>
      <h1></h1>
      <a
        href={t("cv")}
        target="_blank"
        rel="noopener noreferrer"
        className="about_me_cta"
      >
        {t("download")}
      </a>
    </Container>
  );
}

export default AboutMe;
