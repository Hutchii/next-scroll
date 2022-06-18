import Slide from "./Slide";
import { useRef } from "react";
import SliderNavigation from "./SliderNavigation";
import { slidesData } from "../utils/slidesData";

export default function Slider() {
  const sliderRef = useRef(null);

  const handleNavigation = (sign) =>
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: (sign * sliderRef.current.firstChild.clientWidth) / 1.5,
    });

  const handlePagination = (index) =>
    sliderRef.current.children[index].scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

  return (
    <main>
      <div className="slider-nav spacer">
        <SliderNavigation
          onClickPrev={() => handleNavigation(-1)}
          onClickNext={() => handleNavigation(1)}
        />
      </div>
      <div className="container" ref={sliderRef}>
        {slidesData.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </div>
      <div className="pagination">
        {slidesData.map((dot) => (
          <div
            key={dot.id}
            onClick={() => handlePagination(dot.id)}
            className="dot"
          />
        ))}
      </div>
    </main>
  );
}
