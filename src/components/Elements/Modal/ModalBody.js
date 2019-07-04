import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalBody = (props) => {
  const { children } = props;
  const classList = classNames('bi-modal-body');
  return (
    <p className={classList}>
      {children}
    </p>
  );
};

ModalBody.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,
};


ModalBody.defaultProps = {
  children: undefined,
};

export default React.memo(ModalBody);
