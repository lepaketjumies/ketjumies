import { useState } from "react";
import Megiskuva from "./megis.jpg";
import Megiswav from "./megis.mp3";
import "./Megis.css";

export default function Megis() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    const button = document.querySelector(".megis-button");
    const currentRotation =
      parseFloat(button.style.transform.replace(/[^0-9\-.,]/g, "")) || 0; // This part was generated with the help of Copilot, since I wanted to add something unique, and fun to my portfolio.
    const newRotation = currentRotation + 360;
    button.style.transition = "transform 0.5s";
    button.style.transform = `rotate(${newRotation}deg)`;
    setCount(count + 1);
    const audio = new Audio(Megiswav);
    audio.play();
  };
  return (
    <div className="megis-container">
      <button onClick={handleClick} className="megis-button">
        <img src={Megiskuva} alt="megis" />
      </button>
      <p>{count < 1 ? "Button has not been pressed" : `Count: ${count}`}</p>
    </div>
  );
}
export { Megis };
