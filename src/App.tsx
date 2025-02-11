import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <section>
        <div>
          <h1>Jose Hector Rodriquez Rodriguez</h1>
          <h2>{t("degree")}</h2>
          <img src="../src/images/perfil.jpg" alt="" />
          <p>{t("about_me")}</p>
          <a
            href="https://drive.google.com/file/d/1GABC7AI6Q7nZNEO7uFd-VE3E2uCv3hLH/view?usp=sharing"
            target="_blank"
          >
            <button>{t("download")}</button>
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
