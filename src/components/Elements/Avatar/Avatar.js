import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import { makePillFromProp, PillProp, Size, warn } from '../../../shared';

import './avatar.scss';

/**
 * Avatar component is meant to show the user's face image or the user initials.
 */
const Avatar = ({ src, alt, shape, initials, size, state, pill, className, ...rest }) => {
  const classList = classNames('bi bi-avatar', {
    'avt-sm': size === 'small',
    'avt-lg': size === 'large',
    'avt-rounded': shape === 'rounded',
    'avt-square': shape === 'square',
    'avt-initials': initials,
  }, className);

  if (!initials && !src) {
    warn('Avatar component has been used without providing a \'src\' nor a \'initial\' prop');
    return null;
  }

  return (
    <div className={classList} {...rest}>
      <div className="avatar-item">
        {src && (<Image src={src} alt={alt} rounded={shape === 'rounded'} />)}
        {initials && (<span className="initials">{initials.slice(0, 2)}</span>)}
      </div>
      {pill && makePillFromProp(pill)}
      {state && <span className={`avt-state state-${state}`} />}
    </div>
  );
};

Avatar.propTypes = {
  /**
   * Defines the avatar size
   */
  size: Size,
  /**
   * Defines the avatar shape
   */
  shape: PropTypes.oneOf(['rounded', 'square']),
  /**
   * The avatar image source
   */
  src: PropTypes.string,
  /**
   * Shows the user's initials rather than her/his face
   */
  initials: PropTypes.string,
  /**
   * The avatar image alternative text
   */
  alt: PropTypes.string,
  /**
   * Shows a pill right under the image
   */
  pill: PillProp,
  /**
   * Defines the avatar shape
   */
  state: PropTypes.oneOf(['offline', 'online', 'danger']),
};

Avatar.defaultProps = {
  size: 'default',
  shape: 'rounded',
  src: undefined,
  initials: undefined,
  alt: 'Avatar image',
  pill: undefined,
  state: undefined,
};

export default React.memo(Avatar);
