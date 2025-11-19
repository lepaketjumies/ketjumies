import Header from "../components/Header";
import "./Projects.css";
import Slider from "react-slick";
import Megis from "../projects/Megis";

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
      </div>
      <div className="center-container">
        <div className="projects-slider">
          <Slider {...settings}>
            <div>
              <h3>
                <img
                  src="https://iplaceholder.com/1530x700/ccc/fff/png"
                  alt="moi"
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <img
                  src="https://iplaceholder.com/1530x700/ccc/fff/png"
                  alt="moi"
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <img
                  src="https://iplaceholder.com/1530x700/ccc/fff/png"
                  alt="moi"
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <img
                  src="https://iplaceholder.com/1530x700/ccc/fff/png"
                  alt="moi"
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <img
                  src="https://iplaceholder.com/1530x700/ccc/fff/png"
                  alt="moi"
                />
              </h3>
            </div>
            <div>
              <h3>
                {" "}
                <img
                  src="https://iplaceholder.com/1530x700/ccc/fff/png"
                  alt="moi"
                />
              </h3>
            </div>
          </Slider>
        </div>
      </div>
      <Megis />
    </div>
  );
}
