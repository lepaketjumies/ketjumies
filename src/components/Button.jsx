import { useState } from "react";
import arrow from "./../assets/down.png";
import "./Button.css";

export default function Nappi({ img_src }) {
  const [isTrue, setIsTrue] = useState(false);
  const handleSwitch = () => {
    setIsTrue(!isTrue);
  };
  return (
    <>
      <div className="toggle-container">
        <button onClick={handleSwitch}>
          <img
            src={arrow}
            className={isTrue ? "active-image" : "inactive-image"}
          />
          <p>{isTrue ? "Click to hide" : "View code"}</p>
        </button>
      </div>

      <div className={isTrue ? "active" : "inactive"}>
        <img src={img_src} alt="placeholder" />
      </div>
    </>
  );
}
export { Nappi };
