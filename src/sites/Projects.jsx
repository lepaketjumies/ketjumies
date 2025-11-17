import Header from "../components/Header";
import "./Projects.css";

export default function Projects() {
  return (
    <div>
      <Header />
      <h2>Projects</h2>
      <p>Welcome to the Projects page!</p>
      <div className="cards">
        <div className="card">
          <img
            src="https://iplaceholder.com/300x300/ccc/fff/png"
            alt="ecocom"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laborum numquam in nesciunt modi iure repudiandae nemo saepe, vero,
            velit temporibus ea, culpa ipsum. Quae aliquid molestiae qui totam
            quas.
          </p>
        </div>{" "}
        <div className="card">
          <img
            src="https://iplaceholder.com/300x300/ccc/fff/png"
            alt="ecocom"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laborum numquam in nesciunt modi iure repudiandae nemo saepe, vero,
            velit temporibus ea, culpa ipsum. Quae aliquid molestiae qui totam
            quas.
          </p>
        </div>{" "}
        <div className="card">
          <img
            src="https://iplaceholder.com/300x300/ccc/fff/png"
            alt="ecocom"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laborum numquam in nesciunt modi iure repudiandae nemo saepe, vero,
            velit temporibus ea, culpa ipsum. Quae aliquid molestiae qui totam
            quas.
          </p>
        </div>{" "}
        <div className="card">
          <img
            src="https://iplaceholder.com/300x300/ccc/fff/png"
            alt="ecocom"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            laborum numquam in nesciunt modi iure repudiandae nemo saepe, vero,
            velit temporibus ea, culpa ipsum. Quae aliquid molestiae qui totam
            quas.
          </p>
        </div>
      </div>
    </div>
  );
}
