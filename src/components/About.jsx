import Lepa from "./../assets/Lepa.png";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="center-container">
        <h2>About Me</h2>
        <div className="about-container">
          <img className="image" src={Lepa} alt="ecocom_peek" />
          <p>
            Hi! I am Lenni Kämäläinen, a 17-year-old young man from Rovaniemi. I
            am studying a basic degree in information and communication
            technology, specializing in software development.
            <br /> In my free time, I sleep, play video games, and generally
            spend time with my friends. My native language is Finnish
          </p>
        </div>
      </div>
    </div>
  );
}
export { About };
