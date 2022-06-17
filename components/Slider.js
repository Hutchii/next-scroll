import Slide from "./Slide";
import { useRef } from "react";
import SliderNavigation from "./SliderNavigation";
import { slidesData } from "../utils/slidesData";

export default function Slider() {
  const sliderRef = useRef(null);

  const changeSlide = (sign) =>
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: (sign * sliderRef.current.firstChild.clientWidth) / 1.5,
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
        {slidesData.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </div>
    </main>
  );
}
