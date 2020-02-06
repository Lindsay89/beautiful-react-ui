import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import getPortalWrapper from './getPortalWrapper';

/**
 * Just creates a React Portal with the given id
 */
const Portal = ({ id, children }) => {
  const wrapper = getPortalWrapper(id);

  /**
   * the following effect returns a clean-up function to be performed
   * on component will unmount, if the given wrapper is empty then remove it.
   */
  useEffect(() => () => {
    if (wrapper && wrapper.innerHTML === '') {
      wrapper.remove();
    }
  }, []);

  return createPortal(children, wrapper);
};

Portal.propTypes = {
  /**
   * the id of the portal wrapper
   */
  id: PropTypes.string.isRequired,
  /**
   * @ignore
   */
  children: PropTypes.node,
};

export default React.memo(Portal);
