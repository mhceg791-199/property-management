import { useEffect } from "react";

const usePillarAutoplay = ({ autoPlayRef, nextSlide, activeSlide }) => {
  useEffect(() => {
    autoPlayRef.current = setInterval(nextSlide, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeSlide]);
};

export default usePillarAutoplay;
