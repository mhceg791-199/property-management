import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import slides from "../../../data/home/licensingSlides";
import useLicensingSlider from "./hooks/useLicensingSlider";
import useLicensingAnimations from "./hooks/useLicensingAnimations";

import MosaicLicensingView from "./MosaicLicensing.view";

const MosaicLicensingContainer = () => {
  const sectionRef = useRef(null);
  const slideContentRef = useRef(null);
  const bgIconRef = useRef(null);

  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);

  useLicensingSlider(setActiveSlide, slides.length);
  useLicensingAnimations({
    sectionRef,
    slideContentRef,
    bgIconRef,
    activeSlide,
  });

  return (
    <MosaicLicensingView
      sectionRef={sectionRef}
      slideContentRef={slideContentRef}
      bgIconRef={bgIconRef}
      slides={slides}
      activeSlide={activeSlide}
      setActiveSlide={setActiveSlide}
      onNavigate={navigate}
    />
  );
};

export default MosaicLicensingContainer;
