import "../style/main.scss";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import AboutMe from "../components/AboutMe";
import ScrollToHashElement from "../components/ScrollToHashElement";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <ScrollToHashElement />
      <Header></Header>
      <div className="main-content">
        <Hero></Hero>
      </div>
      <div className="about-me-content" id="about-me-content">
        <AboutMe></AboutMe>
      </div>
      <div className="projects-content" id="projects-content">
        <Projects></Projects>
      </div>
      <div className="contact-me-content" id="contact-me-content">
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
