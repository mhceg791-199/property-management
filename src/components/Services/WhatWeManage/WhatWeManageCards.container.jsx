import { useRef } from "react";
import WhatWeManageCardsView from "./WhatWeManageCards.view";
import useWhatWeManageAnimations from "./hooks/useWhatWeManageAnimations";

const WhatWeManageCards = () => {
  const sectionRef = useRef(null);
  const rotateSquareRef = useRef(null);
  const shakeSquareRef = useRef(null);

  useWhatWeManageAnimations({
    sectionRef,
    rotateSquareRef,
    shakeSquareRef,
  });

  return (
    <WhatWeManageCardsView
      sectionRef={sectionRef}
      rotateSquareRef={rotateSquareRef}
      shakeSquareRef={shakeSquareRef}
    />
  );
};

export default WhatWeManageCards;
