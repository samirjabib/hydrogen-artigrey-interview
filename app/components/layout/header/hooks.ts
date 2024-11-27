import { useState, useEffect } from 'react';
import { getScrollRatio, hasUserScrolledPastThreshold } from './utils';

export function useHeaderVisibility(scrollThreshold = 0.3) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsHeaderVisible(true);
      }

      const scrollRatio = getScrollRatio();

      const userScrolledPastThreshold = hasUserScrolledPastThreshold(
        scrollRatio,
        scrollThreshold,
      );
      setHasScrolledPastThreshold(userScrolledPastThreshold);

      if (userScrolledPastThreshold) {
        const isScrollingDown = window.scrollY > lastScrollPosition;
        setIsHeaderVisible(!isScrollingDown);
        setLastScrollPosition(window.scrollY);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition, scrollThreshold]);

  return { isHeaderVisible, hasScrolledPastThreshold };
}
