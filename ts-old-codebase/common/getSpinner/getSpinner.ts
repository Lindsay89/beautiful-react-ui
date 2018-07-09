import React, { ReactElement } from 'react';
import Spinner from '../../components/Elements/Spinner';
import { SpinnerProps } from '../../components/Elements/Spinner/components/Spinner';

type BoolOrSpinner = boolean | ReactElement<SpinnerProps> | undefined;

/**
 * @deprecated
 */
export default (prop: BoolOrSpinner, defaultEl: ReactElement<SpinnerProps>, otherProps?: any) => {
  if (prop === true) return defaultEl as ReactElement<SpinnerProps>;

  if ((prop as ReactElement<SpinnerProps>).type && (prop as ReactElement<SpinnerProps>).type === Spinner) {
    return React.cloneElement(prop as ReactElement<SpinnerProps>, otherProps);
  }

  return React.createElement(Spinner, otherProps);
};
