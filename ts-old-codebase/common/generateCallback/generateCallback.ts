import { SyntheticEvent } from 'react';

/**
 * @deprecated
 */
const generateCallback = (event: SyntheticEvent<any>, callbackProp?: Function, value?: any) => {
  if (!!callbackProp && typeof callbackProp === 'function') {
    event.persist();
    const { nativeEvent, currentTarget } = event;
    return callbackProp(nativeEvent, value !== undefined ? value : (currentTarget && currentTarget.value));
  }
};

export default generateCallback;
