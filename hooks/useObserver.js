import { useRef, useState, useEffect, createRef, useCallback } from "react";

export default function useObserver() {
  const slideRef = useRef();
  const [isVisible, setIsVisible] = useState({});

  const callbackFn = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.boundingClientRect.x);
  };
  useEffect(() => {
    const node = slideRef.current;
    const observer = new IntersectionObserver(
      (entries) => callbackFn(entries),
      {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        treshold: 0.01,
      }
    );
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [slideRef]);

  return [slideRef, isVisible];
}

// import { useRef, useState, useEffect, createRef, useCallback } from "react";

// const slides = [
//   { id: 1, name: "tennis" },
//   { id: 2, name: "tennis" },
//   { id: 3, name: "tennis" },
//   { id: 4, name: "tennis" },
//   { id: 5, name: "tennis" },
//   { id: 6, name: "tennis" },
//   { id: 7, name: "tennis" },
// ];

// export default function useObserver(options) {
//   const slidesRefs = useRef([]);
//   const [isVisible, setIsVisible] = useState({});
//   slidesRefs.current = [...Array(slides.length).keys()].map(
//     (_, i) => slidesRefs.current[i] ?? createRef()
//   );
//   const callbackFn = (entries) => {
//     const [entry] = entries;
//     // setIsVisible({
//     //   ...isVisible,
//     //   [entry.target.ariaAtomic]: entry.isIntersecting,
//     // });
//     entry.target.ariaLabel = entry.isIntersecting;
//   };
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => callbackFn(entries),
//       {
//         root: null,
//         rootMargin: "0px -40px 0px -40px",
//         treshold: 1.0,
//       }
//     );
//     slidesRefs.current.forEach((node, i) => {
//       if (node.current) {
//         // node.current.ariaAtomic = i;
//         observer.observe(node.current);
//       }
//     });

//     return () => {
//       slidesRefs.current.forEach((node) => {
//         if (node.current) observer.unobserve(node.current);
//       });
//     };

//     // return () => {
//     //   slidesRefs.current.forEach((node) => {
//     //     let observer = new IntersectionObserver(callbackFn, options);
//     //     if (node.current) observer.unobserve(node.current);
//     //   });
//     // };
//   }, []);

//   return [slidesRefs, isVisible];
// }
