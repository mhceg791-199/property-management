import { useEffect } from "react";
import gsap from "gsap";

const useGovernanceAnimations = (containerRef) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gov-animate", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        clearProps: "all",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef]);
};

export default useGovernanceAnimations;
