import { useRef } from "react";
import useGovernanceAnimations from "./hooks/useGovernanceAnimations";
import GovernanceStructuralHeroView from "./GovernanceStructuralHero.view";

const GovernanceStructuralHero = () => {
  const containerRef = useRef(null);

  useGovernanceAnimations(containerRef);

  return <GovernanceStructuralHeroView containerRef={containerRef} />;
};

export default GovernanceStructuralHero;
