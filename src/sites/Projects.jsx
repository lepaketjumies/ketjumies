import Header from "../components/Header";
import "./Projects.css";
import Slider from "react-slick";
import Megis from "../projects/Megis";
import Megisclicker from "./../assets/project_images/Megis.jpg";
import Nappi from "./../components/Button.jsx";

export default function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Header />
      <div className="center-container">
        <div className="projects-header">
          <h2>Projects</h2>
          <p>Welcome to the Projects page!</p>
        </div>
        <div className="divider"></div>
        <div className="info-container">
          <p>
            Megis clicker, a simple clicker game made with React. Originally
            this game was created with python, improvised from the cookie
            clicker game. The goal of the game is to click the megis as many
            times as possible to earn points and kill some time.
          </p>
        </div>
      </div>

      <div className="center-container">
        <div className="divider"></div>
        <h3
          style={{
            margin: "0 auto",
            width: "80%",
            color: "var(--txt-color)",
          }}
        >
          More info
        </h3>
        <Nappi img_src={Megisclicker} />
        <div className="divider"></div>
      </div>
      <h2
        style={{ margin: "0 auto", color: "var(--accent-color)", width: "80%" }}
      >
        Test megis clicker!
      </h2>
      <Megis />
    </div>
  );
}
