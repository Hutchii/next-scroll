import Slide from "./Slide";
import { useRef } from "react";
import SliderNavigation from "./SliderNavigation";
import { slidesData } from "../utils/slidesData";

export default function Slider() {
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const changeSlide = (sign) =>
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: (sign * slideRef.current.clientWidth) / 1.5,
    });

  return (
    <main>
      <div className="slider-nav spacer">
        <SliderNavigation
          prev={() => changeSlide(-1)}
          next={() => changeSlide(1)}
        />
      </div>
      <div className="container" ref={sliderRef}>
        {slidesData.map((slide, i) => (
          <Slide key={slide.id} slideRef={i === 0 ? slideRef : null} data={slide} />
        ))}
      </div>
    </main>
  );
}
