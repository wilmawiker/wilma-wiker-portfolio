import "../style/main.scss";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import AboutMe from "../components/AboutMe";

function Home() {
  return (
    <>
      <Header></Header>
      <div className="main-content">
        <Hero></Hero>
      </div>
      <div className="about-me-content">
        <AboutMe></AboutMe>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
