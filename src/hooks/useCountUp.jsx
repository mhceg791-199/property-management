import { useEffect, useState } from "react";

function useCountUp(target, start = false, duration = 5000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => { 
    if (!start) return; 

    let startCount = 0;
    const stepTime = 10; 
    const increment = target / (duration / stepTime); // Increment per 10ms
    const counter = setInterval(() => {
      startCount += increment;
      if (startCount >= target) {
        startCount = target;
        clearInterval(counter);
      }
      setCount(Math.floor(startCount));
    }, stepTime);

    return () => clearInterval(counter); // Cleanup on unmount
  }, [target, duration, start]);

  return count;
}

export default useCountUp;
