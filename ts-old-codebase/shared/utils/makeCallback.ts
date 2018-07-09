import { SyntheticEvent } from 'react';

/**
 * @TODO: document this method
 */
const makeCallback = (callbackProp: unknown, override?: any) => (event: SyntheticEvent<any>) => {
  const { nativeEvent, currentTarget } = event;
  const { value } = currentTarget;

  if (typeof callbackProp === 'function') {
    return callbackProp(nativeEvent, override === undefined ? value : override);
  }
};

export default makeCallback;
