import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMosaicApproachAnimations = (containerRef) => {
  useEffect(() => {
    if (!containerRef?.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".eng-layer", {
        y: 80,
        opacity: 0,
        rotateX: -20,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
      })
        .from(
          ".draw-line",
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.6",
        )
        .from(
          ".content-fade",
          {
            x: -40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.9",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

export default useMosaicApproachAnimations;
