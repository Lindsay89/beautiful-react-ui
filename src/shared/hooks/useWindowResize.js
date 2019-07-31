import { useEffect } from 'react';
import debounce from 'lodash/debounce';

/**
 * Accepts a function, called resizeHandler, to be fired when the window size changes.
 * The resizeHandler will be debounced with a 150 milliseconds delay to improve performances.
 * @param resizeHandler
 */
const useWindowResize = (resizeHandler) => {
  useEffect(() => {
    const debouncedHandler = debounce(resizeHandler, 150);

    window.addEventListener('resize', debouncedHandler);

    return () => {
      window.removeEventListener('resize', debouncedHandler);
    };
  });
};

export default useWindowResize;
