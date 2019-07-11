import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Portal from '../_Portal';
import ModalTitle from './ModalTitle';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import { BaseProps, makeCallback, warn } from '../../../shared';

import './modal.scss';

// this function wipes out the wrong children and warns about it.
const wipeOutIncorrectChildren = (child) => {
  if (child.type !== ModalTitle && child.type !== ModalBody && child.type !== ModalFooter) {
    warn(
      'Modal allows only Modal.Title, Modal.Body or Modal.Footer children, other kind of elements will be wiped out',
    );
    return null;
  }
  return child;
};


/**
 * A Modal component shows its children contents positioned over everything else in the document.
 */
// the React.memo has been used here rather than on the export line like other cases, to avoid wrapping the shortcut.
const Modal = React.memo((props) => {
  const {
    children, id, style, className, isOpen, centered, size, animation, onBackdropClick, backdropRender, onClose, onShow,
  } = props;


  if (!isOpen) {
    return null;
  }

  const onCloseClickHandler = () => {
    if (onBackdropClick) {
      onBackdropClick();
    }
    if (onClose) {
      onClose();
    }
  };

  const classList = classNames('bi bi-modal', {
    'modal-open': isOpen,
    'modal-centered': centered,
    'modal-small': size === 'small',
    'modal-large': size === 'large',
    'modal-fade': animation === 'fade',
    'modal-scale': animation === 'zoom',
    'modal-slideRight': animation === 'slideRight',
    'modal-slideLeft': animation === 'slideLeft',
    'modal-slideBottom': animation === 'slideBottom',
    'modal-slideTop': animation === 'slideTop',
  }, className);

  // useEffect is used to run onShow prop only when modal shows up
  useEffect(() => {
    if (onShow && isOpen) {
      onShow();
    }
  }, [isOpen]);

  const childrenArray = Children.map(children, wipeOutIncorrectChildren);
  return (
    <Portal id="bi-modals">
      <div className="bi-modal-wrapper">
        {!backdropRender && (
          <div
            className="modal-backdrop"
            onClick={makeCallback(onCloseClickHandler)}
            role="button"
            tabIndex={0}
            onKeyDown={makeCallback(onCloseClickHandler)}
          />
        )}
        {backdropRender && backdropRender(props)}
        <div id={id} style={style} className={classList}>
          <div className="modal-content-wrapper">
            {childrenArray}
          </div>
        </div>
      </div>
    </Portal>
  );
});

Modal.propTypes = {
  ...BaseProps,
  /**
   * This prop defines whether the modal is shown or not.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * onShow will be performed when each time the modal will be open
   */
  onShow: PropTypes.func,
  /**
   * Centered prop center the modal to place it in the middle of the screen viewport.
   */
  centered: PropTypes.bool,
  /**
   * It defines the modal's dimension
   */
  size: PropTypes.string,
  /**
   * It defines what kind of animation should be performed
   */
  animation: PropTypes.oneOf(['fade', 'zoom', 'slideRight', 'slideLeft', 'slideBottom', 'slideTop']),
  /**
   * If defined, this function will be run when clicking on backdrop
   */
  onBackdropClick: PropTypes.func.isRequired,
  /**
   * this prop will replace the normal behavior of modal component
   */
  backdropRender: PropTypes.func,
};

Modal.defaultProps = {
  onShow: undefined,
  centered: false,
  size: 'default',
  animation: 'zoom',
  backdropRender: undefined,
};

Modal.Title = ModalTitle;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
