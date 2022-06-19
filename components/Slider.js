import Slide from "./Slide";
import { slidesData } from "../utils/slidesData";
import { useSlider } from "../hooks/useSlider";

export default function Slider() {
  const { Slider } = useSlider({ pagination: true });

  return (
    <main>
      <div className="slider-nav spacer"></div>
      <Slider>
        {slidesData.map((slide) => (
          <Slide key={slide.id} data={slide} />
        ))}
      </Slider>
    </main>
  );
}
