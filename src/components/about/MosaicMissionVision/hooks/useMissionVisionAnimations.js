import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMissionVisionAnimations = ({
  sectionRef,
  missionRef,
  visionRef,
  rotateSquareRef,
  shakeSquareRef,
}) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from(".blueprint-line-h", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          scaleX: 0,
          opacity: 0,
          duration: 2.5,
          stagger: 0.4,
          ease: "expo.inOut",
        });

        gsap.from(".blueprint-line-v", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          scaleY: 0,
          opacity: 0,
          duration: 2.5,
          delay: 0.5,
          ease: "expo.inOut",
        });
      });

      gsap.to(rotateSquareRef.current, {
        rotation: 405,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(shakeSquareRef.current, {
        x: "+=10",
        y: "-=10",
        rotation: "+=5",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      [missionRef, visionRef].forEach((ref) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(ref.current, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
          .from(
            ref.current.querySelectorAll(".line-draw-inner"),
            {
              width: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "-=0.5"
          )
          .from(
            ref.current.querySelectorAll(".geo-element-inner"),
            {
              scale: 0,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: 0.2,
            },
            "-=0.8"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
};

export default useMissionVisionAnimations;
