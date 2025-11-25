import "./App.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <div className="center-container">
        <div className="intro">
          <p>
            Hi, <br />
            I'm <span>Lepa</span>
          </p>
        </div>
        <div className="divider"></div>
      </div>
      <About />
      <Skills />
      <div className="center-container">
        <div className="divider"></div>
      </div>{" "}
      <Experience />
      <div className="center-container">
        <div className="divider"></div>
      </div>
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
