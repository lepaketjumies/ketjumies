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
            <span>
              <a href="https://www.linkedin.com/in/lepaketjumies">
                lepaketjumies
              </a>
            </span>
          </li>
          <li>
            <img src={Facebook} alt="facebook" />
            <span>
              <a href="https://www.facebook.com/profile.php?id=100091602912843">
                lepaketjumies
              </a>
            </span>
          </li>
          <li>
            <img src={Github} alt="Github" />
            <span>
              <a href="https://github.com/lepaketjumies">lepaketjumies</a>
            </span>
          </li>
          <li>
            <img src={Instagram} alt="instagram" />
            <span>
              <a href="https://www.instagram.com/lepaketjumies/">
                lepaketjumies
              </a>
            </span>
          </li>
        </ul>
      </div>

      <div className="divider"></div>
    </div>
  );
}
export { Contact };
