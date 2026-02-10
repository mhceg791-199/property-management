import { useRef } from "react";
import EngineeringScopeView from "./EngineeringScope.view";
import useEngineeringScopeAnimations from "./hooks/useEngineeringScopeAnimations";

const EngineeringScopeContainer = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEngineeringScopeAnimations({
    containerRef,
    triggerRef,
  });

  return (
    <EngineeringScopeView
      containerRef={containerRef}
      triggerRef={triggerRef}
    />
  );
};

export default EngineeringScopeContainer;
