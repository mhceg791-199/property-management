import { useRef } from "react";
import technicalPillars from "../../../data/services/technicalPillars";
import useMosaicApproachAnimations from "./hooks/useMosaicApproachAnimations";
import MosaicApproachView from "./MosaicApproach.view";

const MosaicApproachContainer = () => {
  const containerRef = useRef(null);

  useMosaicApproachAnimations(containerRef);

  return (
    <MosaicApproachView
      containerRef={containerRef}
      technicalPillars={technicalPillars}
    />
  );
};

export default MosaicApproachContainer;
