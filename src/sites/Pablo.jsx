import Header from "../components/Header";
import Footer from "../components/Footer";
import Pablito from "./../assets/pablito.png";

export default function EasterEgg() {
  return (
    <div>
      <Header />
      <div className="center-container">
        <h1>Pablo</h1>
        <img src={Pablito} alt="Pablo" />
        <p>
          A little easter egg for our lovely teacher, who was bad mouthing the
          all amazing, charming, most handsome cat ever, Pablo.
        </p>
      </div>
      <Footer />
    </div>
  );
}
export { EasterEgg };
