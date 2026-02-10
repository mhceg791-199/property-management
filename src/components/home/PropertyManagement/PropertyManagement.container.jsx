import { useRef, useState } from "react";
import PropertyManagementView from "./PropertyManagement.view";
import usePropertyGridAnimation from "./hooks/usePropertyGridAnimation";
import sectors from "../../../data/home/sectors";

const PropertyManagementContainer = () => {
  const containerRef = useRef(null);
  const [activeSector, setActiveSector] = useState(null);

  usePropertyGridAnimation();

  return (
    <PropertyManagementView
      containerRef={containerRef}
      sectors={sectors}
      activeSector={activeSector}
      setActiveSector={setActiveSector}
    />
  );
};

export default PropertyManagementContainer;
