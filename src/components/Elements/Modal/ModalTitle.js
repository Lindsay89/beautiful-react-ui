import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { warn } from '../../../shared';
import CloseIcon from '../_CloseIcon';

/**
 * this component is rendering the header of the modal window.
 */
const ModalTitle = (props) => {
  const { children, onToggle, onClose, closeButtonRender } = props;
  const onCloseClickHandler = () => {
    if (onToggle) {
      onToggle();
    }

    if (onClose) {
      onClose();
    }
  };

  // one of the two following props must be defined.
  if (!onToggle && !closeButtonRender) {
    warn('It must be define one of the following two props to close the modal: onToggle or closeButtonRender');
  }


  return (
    <div className="bi-modal-title">
      {children}
      {closeButtonRender && closeButtonRender()}
      {!closeButtonRender
        && (
          <Button color="transparent" className="modal-button" onClick={onCloseClickHandler}>
            <CloseIcon />
          </Button>
        )
      }

    </div>
  );
};

ModalTitle.propTypes = {
  /**
   * The callback to be performed when clicking on clasable button
   */
  onToggle: PropTypes.func,
  /**
   * onClose will be performed when each time the modal will be close
   */
  onClose: PropTypes.func,
  /**
 * it will be render instead of the close button
 */
  closeButtonRender: PropTypes.func,
  /**
  * @ignore
  */
  children: PropTypes.node,
};

ModalTitle.defaultProps = {
  children: undefined,
  onToggle: undefined,
  onClose: undefined,
  closeButtonRender: undefined,
};

export default React.memo(ModalTitle);
