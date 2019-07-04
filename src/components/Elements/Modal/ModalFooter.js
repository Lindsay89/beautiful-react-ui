import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalFooter = (props) => {
  const { children } = props;
  const classList = classNames('bi-modal-footer');
  return (
    <footer className={classList}>{children}</footer>
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
