import { useEffect } from "react";
import { gsap } from "gsap";

const useKeyDiffAnimations = ({ activeIdx, imageRef, cardRef }) => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        cardRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.08 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "expo.out" },
        "-=0.2"
      );
  }, [activeIdx]);
};

export default useKeyDiffAnimations;
