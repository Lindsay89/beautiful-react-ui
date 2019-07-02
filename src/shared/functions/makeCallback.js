/**
 * This function takes a callbackProp and a possible overrideValue as parameters and return a function
 * that, given a React SyntheticEvent, will perform the callbackProp with the original nativeEvent taken from the
 * React SyntheticEvent.
 * The purpose of this function is to generate callbacks that receive the nativeEvent rather than the
 * React SyntheticEvent to be used as the following:
 *
 * ```
 * <SomeComponent onClick={makeCallback(callbackProp)} />
 *
 * // callbackProp will then be performed receiving the nativeEvent rather than the SyntheticEvent
 * ```
 *
 * Another purpose of this function is to pass the possible target's value as a second parameter of the callbackProp;
 *
 * Example:
 *
 * ```
 * <Input onChange={makeCallback(onChangeProp)} />
 *
 * // onChangeProp will then be performed receiving the nativeEvent and the Input value
 * ```
 *
 * It is possible to override the input value by defining the overrideValue:
 *
 * ```
 * <Input onChange={makeCallback(onChangeProp, 10)} />
 *
 * // onChangeProp will then be performed receiving the nativeEvent and 10
 * ```
 *
 * Although we do understand the performance improvements that React SyntheticEvent implied, we prefer avoid
 * passing it down to the component's callbacks as it is impossible to access to the nativeEvent asynchronously.
 */
const makeCallback = (callbackProp, overrideValue) => (event) => {
  if (typeof callbackProp === 'function') {
    event.persist();
    const { nativeEvent, currentTarget } = event;
    const { value } = currentTarget;

    return callbackProp(nativeEvent, overrideValue === undefined ? value : overrideValue);
  }

  return undefined;
};

export default makeCallback;
