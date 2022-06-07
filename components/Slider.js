import Slide from "./Slide";
import { useRef, useState, useEffect } from "react";
import SliderNavigation from "./SliderNavigation";
import { slidesData } from "../utils/slidesData";

export default function Slider() {
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: slideWidth / 1.5,
    });
  };
  const prevSlide = () => {
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: -slideWidth / 1.5,
    });
  };

  useEffect(() => {
    setSlideWidth(slideRef.current.clientWidth);
  }, []);

  return (
    <main>
      <div className="slider-nav spacer">
        <SliderNavigation prev={prevSlide} next={nextSlide} />
      </div>
      <div className="container" ref={sliderRef}>
        {slidesData.map((slide, i) => (
          <Slide
            key={slide.id}
            reff={i === 0 ? slideRef : null}
            data={slide}
          />
        ))}
      </div>
    </main>
  );
}
