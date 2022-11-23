import { useState, useEffect } from "react";

interface Size {
  width: number | undefined;
  height: number | undefined;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: (windowSize.width as number) < 768,
    ...windowSize,
  };
}
