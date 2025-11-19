import "./Header.css";
import SkillBar from "react-skillbars";

export default function Header() {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/test">Test</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export { Header };
