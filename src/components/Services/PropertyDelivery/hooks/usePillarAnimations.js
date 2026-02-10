import { useEffect } from "react";
import { gsap } from "gsap";

const usePillarAnimations = ({ containerRef, activeSlide }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(".slide-content-box", {
        opacity: 0,
        x: -20,
        duration: 0.3,
        ease: "power2.in",
      }).fromTo(
        ".slide-content-box",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power4.out" }
      );

      gsap.fromTo(
        ".bg-number",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 0.04, duration: 1.5, ease: "expo.out" }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeSlide]);
};

export default usePillarAnimations;
