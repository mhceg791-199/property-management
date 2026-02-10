import { useEffect, useRef } from "react";

const useKeyDiffAutoplay = ({
  dataLength,
  duration,
  setActiveIdx,
  setIsPaused,
}) => {
  const intervalRef = useRef(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    start();
    return stop;
  }, []);

  const start = () => {
    stop();
    intervalRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        setActiveIdx((prev) =>
          prev === dataLength - 1 ? 0 : prev + 1
        );
      }
    }, duration);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const activateSlide = (idx) => {
    isHoveringRef.current = true;
    setIsPaused(true);
    setActiveIdx(idx);
  };

  const deactivateSlide = () => {
    isHoveringRef.current = false;
    setIsPaused(false);
  };

  return { activateSlide, deactivateSlide };
};

export default useKeyDiffAutoplay;
