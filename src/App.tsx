import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
import "./i18n";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Header />
      <section>
        <AboutMe />
      </section>

      <Footer />
    </>
  );
}

export default App;
