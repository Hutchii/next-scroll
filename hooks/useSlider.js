import { useRef } from "react";

export const useSlider = ({ navigation = true, pagination = false }) => {
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

  const Slider = ({ children }) => {
    return (
      <>
        {navigation && (
          <div className="slider-nav spacer">
            <button onClick={() => handleNavigation(-1)}>&#8592; Prev</button>
            <button onClick={() => handleNavigation(1)}>Next &#8594;</button>
          </div>
        )}
        <div className="container" ref={sliderRef}>
          {children}
        </div>
        {pagination && (
          <div className="pagination">
            {children.map((dot) => (
              <div
                key={dot.key}
                onClick={() => handlePagination(dot.key)}
                className="dot"
              />
            ))}
          </div>
        )}
      </>
    );
  };
  return {
    Slider,
  };
};

//Drag logic (when using scrollLeft with scroll-snap-align smooth scrolling doesn`t work):

// onMouseDown={handleMouseDown}
// onMouseUp={handleMouseX}
// onMouseLeave={handleMouseX}
// onMouseMove={handleMouseMove}

// const [pos, setPos] = useState({
//   isDown: false,
//   startX: 0,
//   scrollLeft: 0,
// });
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
//   if (!pos.isDown) return;
//   e.preventDefault();
//   const x = e.pageX - sliderRef.current.offsetLeft;
//   const walk = (x - pos.startX) * 1.5;
//   sliderRef.current.scrollLeft = pos.scrollLeft - walk;
// };
