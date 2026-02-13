import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./i18n";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import { ModalProvider } from "./context/ModalContext/ModalContext";
import { useHtmlLang } from "./hooks/useHtmlLang";

function App() {
  useHtmlLang();
  return (
    <ModalProvider>
      <Header />
      <main>
        <AboutMe />
        <Skills />
        <Portfolio />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
    </ModalProvider>
  );
}

export default App;
