/**
 * Accepts a resizeHandler callback to be fired when the window size changes.
 * The resizeHandler will be debounced with a 150 milliseconds delay to avoid poor performances behavior.
 */
declare const useWindowResize: (resizeHandler: Function) => undefined;

export default useWindowResize;
