import Slide from "./Slide";
import { createRef, useRef, useState, useEffect } from "react";
import scrollIntoView from "scroll-into-view-if-needed";
import useObserver from "../../../hooks/useObserver";

const slides = [
  { id: 1, name: "tennis" },
  { id: 2, name: "tennis" },
  { id: 3, name: "tennis" },
  { id: 4, name: "tennis" },
  { id: 5, name: "tennis" },
  { id: 6, name: "tennis" },
  { id: 7, name: "tennis" },
];

export default function Slider() {
  const [slideWidth, setSlideWidth] = useState(0);
  const sliderRef = useRef(null);
  const slideRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: slideWidth,
    });
  };
  const prevSlide = () => {
    sliderRef.current.scrollBy({
      behavior: "smooth",
      left: -slideWidth,
    });
  };

  useEffect(() => {
    setSlideWidth(slideRef.current.clientWidth);
  }, []);

  return (
    <main className="spacer">
      <div className="container" ref={sliderRef}>
        {slides.map((slide, i) => (
          <Slide key={slide.id} reff={i === 0 ? slideRef : null} />
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
      <button onClick={prevSlide}>Prev</button>
    </main>
  );
}