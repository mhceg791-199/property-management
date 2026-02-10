import { useEffect } from "react";
import { gsap } from "gsap";

const usePropertyGridAnimation = () => {
  useEffect(() => {
    gsap.from(".grid-line", {
      scaleX: 0,
      scaleY: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power3.inOut",
    });
  }, []);
};

export default usePropertyGridAnimation;
