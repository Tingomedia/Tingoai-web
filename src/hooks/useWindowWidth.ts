import { useState, useEffect } from "react";

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const mapRange = (
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number
  ) => {
    const mapped =
      ((width - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
    return Math.min(outMax, Math.max(outMin, mapped));
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, mapRange };
};

export default useWindowWidth;
