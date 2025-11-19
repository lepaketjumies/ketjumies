import Header from "./Header";
import { useState } from "react";
import "./Test.css";

export default function Test() {
  const [isTrue, setIsTrue] = useState(false);
  const handleSwitch = () => {
    setIsTrue(!isTrue);
  };
  return (
    <div className="test-container">
      <Header />
      <button onClick={handleSwitch}>{isTrue ? "On" : "Off"}</button>
      <div className={isTrue ? "active" : "inactive"}>
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </div>
    </div>
  );
}
export { Test };
