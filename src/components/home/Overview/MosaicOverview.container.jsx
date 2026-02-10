import { useRef } from "react";
import MosaicOverviewView from "./MosaicOverview.view";
import logo from "../../../assets/home/overview.webp";
import { useOverviewAnimations } from "./hooks/useOverviewAnimations";
import { useOverviewLogoZoom } from "./hooks/useOverviewLogoZoom";

const MosaicOverview = () => {
  const containerRef = useRef(null);
  const hexagonsRef = useRef([]);

  const { logoRef, toggleLogoSize } = useOverviewLogoZoom();

  useOverviewAnimations(containerRef, hexagonsRef);

  return (
    <MosaicOverviewView
      containerRef={containerRef}
      hexagonsRef={hexagonsRef}
      logoRef={logoRef}
      onLogoClick={toggleLogoSize}
      logo={logo}
    />
  );
};

export default MosaicOverview;
