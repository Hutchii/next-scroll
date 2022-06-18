import Slide from "./Slide";
import { useRef, useState } from "react";
import SliderNavigation from "./SliderNavigation";
import { slidesData } from "../utils/slidesData";
import { useSlider } from "../hooks/useSlider";

export default function Slider() {
  const { Slider } = useSlider({ pagination: true });
  // const [pos, setPos] = useState({
  //   isDown: false,
  //   startX: 0,
  //   scrollLeft: 0,
  // });
  // const sliderRef = useRef(null);

  // const handleNavigation = (sign) =>
  //   sliderRef.current.scrollBy({
  //     behavior: "smooth",
  //     left: (sign * sliderRef.current.firstChild.clientWidth) / 1.5,
  //   });

  // const handlePagination = (index) =>
  //   sliderRef.current.children[index].scrollIntoView({
  //     behavior: "smooth",
  //     inline: "start",
  //     block: "nearest",
  //   });

  // const handleMouseDown = (e) => {
  //   setPos({
  //     isDown: true,
  //     startX: e.pageX - sliderRef.current.offsetLeft,
  //     scrollLeft: sliderRef.current.scrollLeft,
  //   });
  // };
  // const handleMouseX = (e) => {
  //   setPos({
  //     ...pos,
  //     isDown: false,
  //   });
  // };
  // const handleMouseMove = (e) => {
  //   // const atSnappingPoint = sliderRef.current.scrollLeft % sliderRef.current.offsetWidth === 0;
  //   if (!pos.isDown) return;
  //   e.preventDefault();
  //   const x = e.pageX - sliderRef.current.offsetLeft;
  //   const walk = (x - pos.startX) * 1.5;
  //   sliderRef.current.scrollLeft = pos.scrollLeft - walk;
  // };
  return (
    <main>
      <div className="slider-nav spacer"></div>
      <Slider>
        {slidesData.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </Slider>
      {/* <div
        className="container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseX}
        onMouseLeave={handleMouseX}
        onMouseMove={handleMouseMove}
        // onMouseMove={onMouseMove}
      >
        {slidesData.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </div> */}
      {/* <div className="pagination">
        {slidesData.map((dot) => (
          <div
            key={dot.id}
            onClick={() => handlePagination(dot.id)}
            className="dot"
          />
        ))}
      </div> */}
    </main>
  );
}
