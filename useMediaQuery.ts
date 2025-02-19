import { useState, useEffect } from 'react';

const useMediaQuery = (query:string) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      
      const listener = () => setMatches(media.matches);
      listener();
      
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }, [query]);
  
    return matches;
  };

  export default useMediaQuery;