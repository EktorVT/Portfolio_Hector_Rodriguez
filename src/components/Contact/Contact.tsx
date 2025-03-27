import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        "service_uubxx1i",
        "template_cat8ale",
        formData,
        "ZX-R3_CNu17Z_vei0"
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      console.error("Email send error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <h2 className="contact-title">{t("contact_me")} 📩</h2>
      <p className="contact_paragraph">{t("contact_description")}</p>
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/jose-hector-rodriguez-rodriguez-b02229273/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/EktorVT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <a href="mailto:hector2001rdz@gmail.com" className="email-link">
        <FaEnvelope /> hector2001rdz@gmail.com
      </a>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder={t("name_placeholder")}
          required
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder={t("email_placeholder")}
          required
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder={t("message_placeholder")}
          required
          onChange={handleChange}
        ></textarea>
        <button className="contact-submit" type="submit" disabled={isLoading}>
          {isLoading ? `${t("contact_sending")}` : `${t("contact_cta")}`}
        </button>
      </form>
      {status === "success" && (
        <p className="success-message">{t("contact_success")}</p>
      )}
      {status === "error" && (
        <p className="error-message">{t("contact_error")}</p>
      )}
    </section>
  );
};

export default Contact;
