import "./Experience.css";
import CV from "./../assets/CV.pdf";

export default function Experience() {
  return (
    <div className="center-container">
      <div className="experience-container">
        <h2>My experiences</h2>
        <h3>TET Internship</h3>
        <h4>
          Sale Lapinmaa <span>27.3. - 31.3.2025</span>
        </h4>
        <p>
          I did a TET internship at Sale Lapinmaa in Rovaniemi at the end of
          March. My tasks included shelving, maintaining the store ' s
          cleanliness, and general customer service.
        </p>
        <h3>TET Internship</h3>
        <h4>
          K-Citymarket Saarenkylä <span>25.9. - 29.9.2023</span>
        </h4>
        <p>
          At the end of September, I was doing a TET internship at Saarenkylä
          K-Citymarket, and my tasks included shelving, customer service, as
          well as cleaning the store.
        </p>
        <button onClick={() => window.open(CV)} className="cv-button">
          View my CV
        </button>
      </div>
    </div>
  );
}
export { Experience };
