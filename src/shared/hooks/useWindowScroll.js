import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

/**
 * Accepts a scrollHandler callback to be fired on window scroll.
 * The scrollHandler will be debounced with a 150 milliseconds delay to avoid poor performances behavior.
 */
const useWindowScroll = (scrollHandler) => {
  const debouncedHandler = useCallback(debounce(scrollHandler, 150), [scrollHandler]);

  useEffect(() => {
    window.addEventListener('scroll', debouncedHandler);

    return () => {
      window.removeEventListener('scroll', debouncedHandler);
    };
  }, [scrollHandler]);
};

export default useWindowScroll;
