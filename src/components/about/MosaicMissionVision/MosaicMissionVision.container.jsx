import { useRef } from "react";
import useMissionVisionAnimations from "./hooks/useMissionVisionAnimations";
import MosaicMissionVisionView from "./MosaicMissionVision.view";

const MosaicMissionVisionContainer = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const rotateSquareRef = useRef(null);
  const shakeSquareRef = useRef(null);

  useMissionVisionAnimations({
    sectionRef,
    missionRef,
    visionRef,
    rotateSquareRef,
    shakeSquareRef,
  });

  return (
    <MosaicMissionVisionView
      sectionRef={sectionRef}
      missionRef={missionRef}
      visionRef={visionRef}
      rotateSquareRef={rotateSquareRef}
      shakeSquareRef={shakeSquareRef}
    />
  );
};

export default MosaicMissionVisionContainer;
