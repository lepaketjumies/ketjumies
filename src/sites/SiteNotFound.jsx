import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SiteNotFound.css";
import virhe from "./../assets/error.png";

export default function SiteNotFound() {
  return (
    <>
      <Header />
      <div className="center-container">
        <div className="not-found-container">
          <img src={virhe} alt="kuva" />
          <h1>Error 404: Site was not found</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
export { SiteNotFound };
