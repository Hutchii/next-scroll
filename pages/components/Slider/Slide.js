import Image from "next/image";

export default function Slide({ id, reff }) {
  return (
    <div className="box" id={id} ref={reff}>
      <Image
        src={`/images/${id + 1}.jpg`}
        alt="Tennis"
        width={600}
        height={700}
        quality={85}
      />
    </div>
  );
}
