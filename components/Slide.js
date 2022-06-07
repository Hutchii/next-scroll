import Image from "next/image";

export default function Slide({ id, reff, quote }) {
  return (
    <div className="box" ref={reff}>
      <Image
        src={`/images/${id + 1}.jpg`}
        alt="Tennis"
        width={600}
        height={700}
        quality={85}
      />
      <h1>{quote}</h1>
    </div>
  );
}
