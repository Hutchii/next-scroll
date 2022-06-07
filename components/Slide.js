import Image from "next/image";

export default function Slide({ data, reff }) {
  return (
    <div className="box" ref={reff}>
      <Image
        src={`/images/image-${data.id + 1}.jpg`}
        alt="Tennis"
        width={600}
        height={700}
        quality={85}
      />
      <h1>{data.title}</h1>
      <p className="quote">{data.quote}</p>
      <a
        href={data.link}
        target="_blank"
        rel="noopener noreferrer"
        className="author"
      >
        author &#8594;
      </a>
    </div>
  );
}
