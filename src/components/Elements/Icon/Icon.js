import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas, fab);

/**
 * Icon component
 */
const Icon = ({ name }) => <FontAwesomeIcon icon={name} className="bi bi-icon" />;

Icon.propTypes = {
  /**
   * The [font-awesome](https://fontawesome.com/) icon name
   */
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default React.memo(Icon);
