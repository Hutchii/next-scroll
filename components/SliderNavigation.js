export default function SliderNavigation({ onClickNext, onClickPrev }) {
  return (
    <>
      <button onClick={onClickPrev}>&#8592; Prev</button>
      <button onClick={onClickNext}>Next &#8594;</button>
    </>
  );
}
