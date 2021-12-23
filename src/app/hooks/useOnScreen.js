import React, { useEffect, useRef, useState } from "react";

export const useOnScreen = (options) => {
  const elementRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const onChange = (entries) => {
    const titleProyect = entries[0];
    setIsVisible(titleProyect.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, options);
    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, [elementRef, options]);
  return [elementRef, isVisible];
};
