import { useRef, useState } from "react";
import technicalData from "../../../data/home/technicalData";
import useKeyDiffAnimations from "./hooks/useKeyDiffAnimations";
import useKeyDiffAutoplay from "./hooks/useKeyDiffAutoplay";
import MosaicKeyDifferentiatorView from "./MosaicKeyDifferentiator.view";

const SLIDE_DURATION = 3000;

const MosaicKeyDifferentiatorContainer = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imageRef = useRef(null);
  const cardRef = useRef(null);

  useKeyDiffAnimations({
    activeIdx,
    imageRef,
    cardRef,
  });

  const { activateSlide, deactivateSlide } = useKeyDiffAutoplay({
    dataLength: technicalData.length,
    duration: SLIDE_DURATION,
    setActiveIdx,
    setIsPaused,
  });

  return (
    <MosaicKeyDifferentiatorView
      technicalData={technicalData}
      activeIdx={activeIdx}
      isPaused={isPaused}
      duration={SLIDE_DURATION}
      imageRef={imageRef}
      cardRef={cardRef}
      onActivate={activateSlide}
      onDeactivate={deactivateSlide}
    />
  );
};

export default MosaicKeyDifferentiatorContainer;
