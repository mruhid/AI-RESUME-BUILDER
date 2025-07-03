import React, { useEffect, useState } from "react";

export default function useDimensions(
  contanierRef: React.RefObject<HTMLElement>,
) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const currentRef = contanierRef.current;

    function getDimensions() {
      return {
        width: currentRef?.offsetWidth || 0,
        height: currentRef?.offsetHeight || 0,
      };
    }
    const resizeObserver = new ResizeObserver((entries) => {
      const enrty = entries[0];
      if (enrty) {
        setDimensions(getDimensions());
      }
    });

    if (currentRef) {
      resizeObserver.observe(currentRef);
      setDimensions(getDimensions());
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
      resizeObserver.disconnect();
    };
  }, [contanierRef]);

  return dimensions;
}
