import { useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce';

/**
 * Accepts a resizeHandler callback to be fired when the window size changes.
 * The resizeHandler will be debounced with a 150 milliseconds delay to avoid poor performances behavior.
 */
const useWindowResize = (resizeHandler) => {
  const debouncedHandler = useCallback(debounce(resizeHandler, 150), [resizeHandler]);

  useEffect(() => {
    window.addEventListener('resize', debouncedHandler);

    return () => {
      window.removeEventListener('resize', debouncedHandler);
    };
  }, [resizeHandler]);
};

export default useWindowResize;
