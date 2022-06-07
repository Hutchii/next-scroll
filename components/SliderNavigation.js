export default function SliderNavigation({ next, prev }) {
  return (
    <>
      <button onClick={prev}>&#8592; Prev</button>
      <button onClick={next}>Next &#8594;</button>
    </>
  );
}
