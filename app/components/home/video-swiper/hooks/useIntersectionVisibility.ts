import {useState, useEffect, useRef} from 'react';

export function useIntersectionVisibility(
  options = {threshold: 0.5, rootMargin: '50px'},
) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentNode = containerRef.current;
    if (currentNode) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        options,
      );
      observer.observe(currentNode);

      return () => {
        observer.unobserve(currentNode);
        observer.disconnect();
      };
    }
  }, [options]);

  return {containerRef, isVisible};
}
