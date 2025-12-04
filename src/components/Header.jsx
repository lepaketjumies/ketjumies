import "./Header.css";

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
        </ul>
      </nav>
    </header>
  );
}
export { Header };
