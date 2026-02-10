import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useEngineeringScopeAnimations = ({ containerRef, triggerRef }) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.from(".main-title-part", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      mm.add("(min-width: 768px)", () => {
        gsap.from(".central-spine", {
          height: 0,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.5,
          },
        });

        gsap.utils.toArray(".kinetic-node").forEach((node, i) => {
          const isEven = i % 2 === 0;

          gsap.from(node, {
            x: isEven ? -100 : 100,
            opacity: 0,
            scale: 0.9,
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          });
        });
      });

      mm.add("(max-width: 767px)", () => {
        gsap.utils.toArray(".kinetic-node").forEach((node) => {
          gsap.from(node, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: node,
              start: "top 90%",
            },
          });
        });
      });

      gsap.from(".focus-statement", {
        opacity: 0,
        y: 20,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".focus-statement",
          start: "top 95%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
};

export default useEngineeringScopeAnimations;
