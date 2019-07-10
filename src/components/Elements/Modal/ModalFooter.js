import React from 'react';
import PropTypes from 'prop-types';

/**
 * The ModalFooter compoent manage the  footer of the modal component.
 */
const ModalFooter = (props) => {
  const { children } = props;

  return (
    <footer className="bi-modal-footer">{children}</footer>
  );
};

ModalFooter.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,
};

ModalFooter.defaultProps = {
  children: undefined,
};

export default React.memo(ModalFooter);
