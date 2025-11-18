import "./Experience.css";
import CV from "./../assets/CV.pdf";

export default function Experience() {
  return (
    <div className="center-container">
      <div className="experience-container">
        <h2>My experiences</h2>
        <button onClick={() => window.open(CV)} className="cv-button">
          View my CV
        </button>
      </div>
    </div>
  );
}
export { Experience };
