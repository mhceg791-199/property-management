import { useRef, useState } from "react";
import gsap from "gsap";

export const useOverviewLogoZoom = () => {
  const logoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleLogoSize = () => {
    setIsZoomed(prev => !prev);

    gsap.to(logoRef.current, {
      scale: isZoomed ? 1 : 2.5,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return {
    logoRef,
    toggleLogoSize,
  };
};
