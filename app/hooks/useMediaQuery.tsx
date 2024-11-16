import {useState, useEffect} from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    if (window && query) {
      const mediaQueryList = window.matchMedia(query);

      const handleChange = (event: MediaQueryListEvent) => {
        setMatches(event.matches);
      };

      setMatches(mediaQueryList.matches);
      mediaQueryList.addEventListener('change', handleChange);

      return () => {
        mediaQueryList.removeEventListener('change', handleChange);
      };
    }
    return () => null;
  }, [query]);

  return {matches};
};
