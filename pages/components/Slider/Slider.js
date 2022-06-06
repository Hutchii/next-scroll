import Slide from "./Slide";
import { useRef } from "react";
export default function Slider() {
  const titleRef = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="spacer">
      <div className="container">
        <Slide id="jeden" />
        <Slide id="1" />
        <Slide id="2" />
        <Slide id="3" />
        <Slide />
        <Slide reff={titleRef} id="5" />
      </div>
      <button onClick={handleBackClick}>Next</button>
    </main>
  );
}
