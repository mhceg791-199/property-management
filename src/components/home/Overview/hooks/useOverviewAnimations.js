import { useEffect } from "react";
import gsap from "gsap";

export const useOverviewAnimations = (
  containerRef,
  hexagonsRef
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        skewY: 3,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.15,
      });

      // Floating hexagons
      hexagonsRef.current.forEach((hex, i) => {
        gsap.to(hex, {
          y: "random(-20,20)",
          x: "random(-15,15)",
          rotation: "random(-15,15)",
          duration: "random(4,6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      // Content fade
      gsap.from(".content-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        stagger: 0.25,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
};
