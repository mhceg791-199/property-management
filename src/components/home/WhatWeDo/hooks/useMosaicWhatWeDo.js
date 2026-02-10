import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMosaicWhatWeDo = (services) => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const timelineRef = useRef(null);
  const [itemHeight, setItemHeight] = useState(112);

  useEffect(() => {
    const updateHeight = () => {
      const isMobile = window.innerWidth < 768;
      setItemHeight(isMobile ? 100 : 112);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight();

    const ctx = gsap.context(() => {
      /* Reveal animation */
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".reveal-text", {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "expo.out",
        })
        .from(
          ".static-content",
          {
            x: window.innerWidth > 1024 ? -50 : 0,
            y: window.innerWidth <= 1024 ? 50 : 0,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );

      /* Slider loop */
      const pauseDuration = 3;
      const moveDuration = 1;

      const loop = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });

      timelineRef.current = loop;

      services.forEach((_, i) => {
        loop.fromTo(
          `.progress-bar-${i}`,
          { width: "0%" },
          { width: "100%", duration: pauseDuration }
        );

        loop.to(sliderRef.current, {
          y: -((i + 1) * itemHeight),
          duration: moveDuration,
          ease: "expo.inOut",
          onStart: () =>
            gsap.set(`.progress-bar-${i}`, { width: "0%" }),
        });
      });

      loop.set(sliderRef.current, { y: 0 });
    }, sectionRef);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", updateHeight);
    };
  }, [services, itemHeight]);

  const handlePreviousService = () => {
    if (!timelineRef.current) return;

    const tl = timelineRef.current;
    const stepDuration = 4;
    let targetTime = tl.time() - stepDuration;

    if (targetTime < 0) {
      targetTime = tl.duration() - stepDuration;
    }

    gsap.to(tl, {
      time: targetTime,
      duration: 0.8,
      ease: "power3.inOut",
      onStart: () => tl.pause(),
      onComplete: () => tl.play(),
    });
  };

  return {
    sectionRef,
    sliderRef,
    handlePreviousService,
  };
};

export default useMosaicWhatWeDo;
