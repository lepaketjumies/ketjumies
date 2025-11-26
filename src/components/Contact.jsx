import Header from "../components/Header";
import ContactForm from "../components/ContactForm";
import Email from "./../assets/email.png";
import Linkedin from "./../assets/linkedin.png";
import Facebook from "./../assets/facebook.png";
import Github from "./../assets/github.png";
import Instagram from "./../assets/instagram.png";
import X from "./../assets/x.png";
import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [isTrue, setIsTrue] = useState(false);
  function handleSwitch() {
    setIsTrue(!isTrue);
  }
  return (
    <div className="center-container">
      <div className="divider"></div>
      <div className="contact-container">
        <h2>Contact me</h2>
        <ul>
          <li>
            <img src={Email} alt="Email address" />
            <span>lkamalainen@gmail.com</span>
          </li>
          <li>
            <img src={Linkedin} alt="linkedin" />
            <span>lepaketjumies</span>
          </li>
          <li>
            <img src={Facebook} alt="facebook" />
            <span>lepaketjumies</span>
          </li>
          <li>
            <img src={Github} alt="Github" />
            <span>lepaketjumies</span>
          </li>
          <li>
            <img src={Instagram} alt="instagram" />
            <span>lepaketjumies</span>
          </li>
          <li>
            <img src={X} alt="X" />
            <span>lepaketjumies</span>
          </li>
        </ul>
      </div>
      <div style={{ display: isTrue ? "block" : "none" }}>
        <ContactForm />
      </div>
      <button onClick={handleSwitch} style={{ padding: "20px 20px" }}>
        Contact me
      </button>
      <div className="divider"></div>
    </div>
  );
}
export { Contact };
