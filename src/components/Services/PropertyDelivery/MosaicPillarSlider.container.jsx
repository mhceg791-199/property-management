import { useState, useRef } from "react";
import MosaicPillarSliderView from "./MosaicPillarSlider.view";
import usePillarAutoplay from "./hooks/usePillarAutoplay";
import usePillarAnimations from "./hooks/usePillarAnimations";
import pillars from "../../../data/services/pillars";

const MosaicPillarSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

  const nextSlide = () =>
    setActiveSlide((p) => (p + 1) % pillars.length);
  const prevSlide = () =>
    setActiveSlide((p) => (p - 1 + pillars.length) % pillars.length);

  usePillarAutoplay({
    autoPlayRef,
    nextSlide,
    activeSlide,
  });

  usePillarAnimations({
    containerRef,
    activeSlide,
  });

  return (
    <MosaicPillarSliderView
      containerRef={containerRef}
      activeSlide={activeSlide}
      setActiveSlide={setActiveSlide}
      nextSlide={nextSlide}
      prevSlide={prevSlide}
      autoPlayRef={autoPlayRef}
    />
  );
};

export default MosaicPillarSlider;
