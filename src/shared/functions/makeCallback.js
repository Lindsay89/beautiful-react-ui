/**
 * @TODO: document this method
 */
const makeCallback = (callbackProp, override) => (event) => {
  const { nativeEvent, currentTarget } = event;
  const { value } = currentTarget;

  if (typeof callbackProp === 'function') {
    return callbackProp(nativeEvent, override === undefined ? value : override);
  }

  return undefined;
};

export default makeCallback;
