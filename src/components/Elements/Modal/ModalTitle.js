import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { warn } from '../../../shared';
import CloseIcon from '../_CloseIcon';

const ModalTitle = (props) => {
  const { children, onToggle, onClose, closeButtonRender } = props;
  const onCloseClickHandler = () => {
    if (onToggle) {
      if (onClose) {
        onToggle();
        onClose();
      } else {
        onToggle();
      }
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
          <Button color="transparent" className="close-button" onClick={onCloseClickHandler}>
            <CloseIcon />
          </Button>
        )
      }

    </div>
  );
};

ModalTitle.propTypes = {
  /**
   * If defined, this prop will affect closable button into modal window.
   */
  onToggle: PropTypes.func,
  /**
   * onClose will be performed when each time the modal will be close
   */
  onClose: PropTypes.func,
  /**
 * this prop will effect the modal closable button.
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
