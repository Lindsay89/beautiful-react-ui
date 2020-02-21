import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Size, Color } from '../../../shared';

import './icon.scss';

// TODO: improve the async font-awesome loading business logic
const fontAwesomeAlreadyLoaded = false;

const useAsyncFontAwesomeLoader = () => {
  const [isLoaded, setIsLoaded] = useState(fontAwesomeAlreadyLoaded);

  useEffect(() => {
    if (!fontAwesomeAlreadyLoaded) {
      const loadLibs = () => import('@fortawesome/free-brands-svg-icons').then((fabLib) => {
        library.add(fabLib.fab);

        return import('@fortawesome/free-solid-svg-icons').then((fasLib) => {
          library.add(fasLib.fas);
        });
      });

      loadLibs().finally(() => {
        setIsLoaded(true);
      });
    }
  }, []);

  return isLoaded;
};

const faSizes = { small: 'sm', large: 'lg' };

/**
 * Icon component shows a glyph used to represent something.
 * Built on top of [font-awesome](https://fontawesome.com/);
 */
const Icon = ({ name, color, size, className, ...rest }) => {
  useAsyncFontAwesomeLoader();
  const classList = classNames('bi bi-icon', `${color ? `icon-${color}` : ''}`, className);
  const faSize = faSizes[size];

  return (<FontAwesomeIcon icon={name} size={faSize} className={classList} fixedWidth {...rest} />);
};

Icon.propTypes = {
  /**
   * The [font-awesome](https://fontawesome.com/) icon name
   */
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  /**
   * The icon color, if not defined get the color of its parent.
   */
  color: Color,
  /**
   * The icon size, if not defined get the size of its parent text
   */
  size: Size,
};

Icon.defaultProps = {
  color: undefined,
  size: undefined,
};

export default React.memo(Icon);
