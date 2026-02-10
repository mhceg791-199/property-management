import { useEffect } from "react";
import { gsap } from "gsap";

const useLicensingAnimations = ({
  sectionRef,
  slideContentRef,
  bgIconRef,
  activeSlide,
}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        slideContentRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
        }
      );

      gsap.fromTo(
        bgIconRef.current,
        { opacity: 0, scale: 0.85, rotate: -25 },
        {
          opacity: 0.08,
          scale: 1,
          rotate: -12,
          duration: 1.6,
          ease: "power2.out",
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeSlide]);
};

export default useLicensingAnimations;
