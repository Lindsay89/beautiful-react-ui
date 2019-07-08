import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalTitle = (props) => {
  const { children } = props;
  const classList = classNames('bi-modal-title');
  return (
    <div className={classList}>{children}</div>
  );
};

ModalTitle.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,
};

ModalTitle.defaultProps = {
  children: undefined,
};

export default React.memo(ModalTitle);
