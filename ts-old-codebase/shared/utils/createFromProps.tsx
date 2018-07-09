import React, { ReactElement, ComponentClass } from 'react';
import Icon from '../../components/Elements/Icon/index';
import Spinner from '../../components/Elements/Spinner/index';

import { Size, Color } from '../';
import { IconProps } from '../../components/Elements/Icon/components/Icon';
import { IconName } from '../../components/Elements/Icon/iconNames';
import { SpinnerProps, SpinnerType } from '../../components/Elements/Spinner/components/Spinner';

// @TODO: document this methods

const _createFromProps = (item: unknown, props: any, Component: ComponentClass): ReactElement<any> | null => {
  if (typeof item === 'string') {
    return <Component {...props} />;
  }

  if (item && (item as ReactElement<any>).type && (item as ReactElement<any>).type === Component) {
    const attributes = { ...(item as ReactElement<any>).props, ...props };
    return React.cloneElement((item as ReactElement<any>), attributes);
  }

  return null;
};

export const createIconFromProps = (
  icon: ReactElement<IconProps> | IconName, color?: Color, size?: Size, className?: string,
): ReactElement<IconProps> | null => {
  const props: any = { className };

  if (typeof icon === 'string') {
    props.name = icon;
    props.color = color;
    props.size = size;
  }

  return _createFromProps(icon, props, Icon);
};

export const createSpinnerFromProps = (
  spinner?: ReactElement<SpinnerProps> | SpinnerType | boolean, color?: Color, className?: string,
): ReactElement<SpinnerProps> | null => {
  const props: any = { className };

  if (spinner === true) {
    props.type = 'circle';
    props.size = 'small';
    props.color = color;
    return _createFromProps('', props, Spinner);
  }

  return _createFromProps(spinner, props, Spinner);
};
