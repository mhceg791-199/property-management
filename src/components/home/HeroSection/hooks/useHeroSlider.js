import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export const useHeroSlider = (slidesLength) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const animateSlideChange = (nextIndex) => {
    gsap.to(".slide-content", {
      y: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => setCurrentSlide(nextIndex),
    });
  };

  useEffect(() => {
    gsap.fromTo(
      ".slide-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    );

    timerRef.current = setInterval(() => {
      animateSlideChange((currentSlide + 1) % slidesLength);
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, [currentSlide]);

  return {
    currentSlide,
    animateSlideChange,
  };
};
