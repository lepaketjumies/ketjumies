import "./App.css";
import { Header } from "./components/Header";
import { Skills } from "./components/Skills";

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
      <Skills />
      <div className="center-container">
        <div className="divider"></div>
      </div>
      <footer className="footer">
        &copy; Ketjumies 2025 All Rights Reserved
      </footer>
    </>
  );
}
