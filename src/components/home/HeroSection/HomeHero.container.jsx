import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import slides from "../../../data/home/slides";

import HomeHeroView from "./HomeHero.view";
import { usePlexusCanvas } from "./hooks/usePlexusCanvas";
import { useHeroSlider } from "./hooks/useHeroSlider";

const HomeHero = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  usePlexusCanvas(canvasRef);
  const { currentSlide, animateSlideChange } = useHeroSlider(slides.length);

  return (
    <HomeHeroView
      canvasRef={canvasRef}
      slides={slides}
      currentSlide={currentSlide}
      onSlideChange={animateSlideChange}
      onNavigate={() => navigate("/about")}
    />
  );
};

export default HomeHero;
