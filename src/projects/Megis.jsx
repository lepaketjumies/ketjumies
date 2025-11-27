import { useState } from "react";
import Megiskuva from "./megis.jpg";
import Megiswav from "./megis.mp3";
import "./Megis.css";

export default function Megis() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
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
