import Header from "../components/Header";
import Lepa from "./../assets/Lepa.jpg";
import "./About.css";

export default function About() {
  return (
    <div>
      <Header />
      <div className="center-container">
        <h2>About Me</h2>
        <div style={{}}>
          <img src={Lepa} alt="ecocom_peek" />
          <p>
            I am Lenni Kämäläinen, a 17 year old software development student.
          </p>
        </div>
      </div>
    </div>
  );
}
