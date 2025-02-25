import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./i18n";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Header />
      <section>
        <AboutMe />
        <Skills />
        <WorkExperience />
      </section>

      <Footer />
    </>
  );
}

export default App;
