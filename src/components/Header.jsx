import "./Header.css";
import SkillBar from "react-skillbars";

export default function Header() {
  return (
    <header className="header">
      <h1>Ketjumies</h1>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export { Header };
