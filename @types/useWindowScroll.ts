/**
 * Accepts a scrollHandler callback to be fired on window scroll.
 * The scrollHandler will be debounced with a 150 milliseconds delay to avoid poor performances behavior.
 */
declare const useWindowResize: (scrollHandler: Function) => undefined;

export default useWindowResize;
