import { useEffect } from "react";

const useLicensingSlider = (setActiveSlide, length) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, [length, setActiveSlide]);
};

export default useLicensingSlider;
