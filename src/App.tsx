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
      <h1>Portfolio</h1>
      <section>
        <div>
          <h1>{t("welcome")}</h1>
          <img src="../src/images/perfil.jpg" alt="" />
          <p>{t("about_me")}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
