import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Image from '../Image';
import Paragraph from '../../Typography/_Paragraph';
import { makePillFromProp, PillProp, Size, warn } from '../../../shared';

import './avatar.scss';

/**
 * Avatar component is meant to show the user's profile picture or its initials.
 */
const Avatar = (props) => {
  const { src, alt, shape, initials, size, state, pill, displayName, furtherInfo, className, ...rest } = props;
  const classList = classNames('bi bi-avatar', {
    'avt-sm': size === 'small',
    'avt-lg': size === 'large',
    'avt-rounded': shape === 'rounded',
    'avt-square': shape === 'square',
    'avt-initials': initials,
  }, className);

  if (!initials && !src) {
    warn('Avatar component has been used without providing a \'src\' nor an \'initials\' prop');
    return null;
  }

  return (
    <>
      <div className={classList} {...rest}>
        <div className="bi-avatar-item">
          {src && (<Image src={src} alt={alt} rounded={shape === 'rounded'} />)}
          {initials && (<span className="initials">{initials.slice(0, 2)}</span>)}
        </div>
        {pill && makePillFromProp(pill)}
        {state && <span className={`avt-state state-${state}`} />}
      </div>
      {(displayName || furtherInfo) && (
        <div className="bi-avatar-info">
          {displayName && (
            <Paragraph className="avtr-disp-name">
              {displayName}
            </Paragraph>
          )}
          {furtherInfo && (
            <Paragraph className="avtr-furth-info">{furtherInfo}</Paragraph>
          )}
        </div>
      )}
    </>
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
  /**
   * Defines the user display name
   */
  displayName: PropTypes.string,
  /**
   * Defines some further user's information
   */
  furtherInfo: PropTypes.string,
};

Avatar.defaultProps = {
  size: 'default',
  shape: 'rounded',
  src: undefined,
  initials: undefined,
  alt: 'Avatar image',
  pill: undefined,
  state: undefined,
  displayName: '',
  furtherInfo: '',
};

export default React.memo(Avatar);
